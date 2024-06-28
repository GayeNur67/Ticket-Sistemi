
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Model } from '../../../model';
import { FormsModule } from "@angular/forms"; 
import { AppItem } from '../../../app.item';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;
declare let alertify: any;
  
  interface ModelItem {
    name: string;
    url: string;
    children?: ModelItem[];
  }
@Component({
  selector: 'app-taleptakip',
  templateUrl: './taleptakip.component.html',
  styleUrl: './taleptakip.component.css'
})
export class TaleptakipComponent implements OnInit {
  items: any[] = [];

  openForm(page: string) {
    console.log(`Opening form for ${page}`); 
  } 
  search(value: string) {
    this.searchTerm = value.trim().toLowerCase();
  }
    selectedFileContent: any; // selectedFileContent özelliğini tanımlıyoruz
    selectedFileName: string = ''; // Dosya adını saklamak için bir özellik tanımlıyoruz
  
    modelItems: { [key: string]: ModelItem[] } = {};
  
    constructor(private http: HttpClient, private router: Router) {
      this.model.items = this.getItemsFromLS();
      
    }
  ngOnInit(): void {
    }
  
    ticketTypes: any[];
  
    closeModal() {
      var modal = document.getElementById("modal");
      modal.style.display = "none";
    }
    showDescription(description: string) {
      var modal = document.getElementById("modal");
      var aciklamaMetni = document.getElementById("aciklamaMetni");
      aciklamaMetni.innerHTML = description;
      modal.style.display = "block";
  }
  handleIconClick(item: any) {
    // Tıklama olayının yayılmasını engelle
    event.stopPropagation();
    // Açıklamayı göster
    this.showDescription(item.description);
  }
  // Tıklanan ikonun ait olduğu öğeyi bulmak için bir yardımcı fonksiyon
  getItemFromEvent(event: MouseEvent): any {
    const target = event.target as HTMLElement; // Tıklanan elementi al
    const message = target.closest('.message'); // Tıklanan elementin içindeki .message sınıfına sahip en yakın üst öğeyi bul
    if (message) {
        // Öğenin veri bağlamını al (örneğin, item nesnesi)
        const itemIndex = Array.from(message.parentElement.children).indexOf(message);
        return this.messages[itemIndex]; // İndexe göre öğeyi al
    }
    return null; // Eğer item bulunamazsa null döndür
  }
    tesisSecenekleri: string[] = ['Bartın', 'Meksika', 'Bulgaristan', 'Gebze', 'Amerika'];
    bolumSecenekleri:string[]=['BT-Yazılım', 'BT-Donanım'];
    talepTipiSecenekleri:string[]=['Raporlama','Workflow', 'BERG','EDI','Web BERG','SAP','RPA','Hand Terminal'];
    talepCesidiSecenekleri:string[]=['Geliştirme', 'Destek', 'Toplantı', 'İzin'];
    isinTuruSecenekleri:string[]=['Genel', 'Destek', 'Yazılım', 'Donanım', 'Server'];
   
   
    title(title: any) {
      
      throw new Error('Method not implemented.');
    }
    
    searchTerm: string = '';
    displayAll: boolean = true;
    inputtext: string = '';
    tesis:  string = '';
    bolum:  string = '';
    talepTipi: string = '';
    isinTuru: string = '';
    talepEden: string = '';
    acilDurum: string = '';
    assignedPerson: string;
    description: string = '';
    file: File | null;
    fileName: string | null;
    model = new Model();
    filterText: string="";
    
    messages = [
      { text: 'Message 1', description: 'Description 1', fileName: 'File 1' },
      { text: 'Message 2', description: 'Description 2', fileName: 'File 2' }
      // Diğer mesajlar
    ];
    
    selectedMessageDescription: string = ''; 
  
    addItem() {
      if (this.inputtext === "") {
        alert("Bilgi Giriniz");
        return;
      }
  
      let maxId = 0;
      for (let item of this.model.items) {
        if (item.id > maxId) {
          maxId = item.id;
        }
      }
  
      let data = {
        id: maxId + 1,
        // Diğer özellikler...
      };
  
      this.items.push(data);
      localStorage.setItem('storedItems', JSON.stringify(this.items));
  
      // Kullanıcının girdiği değerleri sıfırla
      this.tesis = "";
      // Diğer özellikleri sıfırla...
    }
    
    getItemsFromLS() {
      let items: AppItem[] = [];
      let value = localStorage.getItem("items");
      if (value != null) {
        items = JSON.parse(value);
      }
      return items;
    }
  
    onYapildiChanged(item: AppItem) {
      let items = this.getItemsFromLS();
      localStorage.clear();
      items.forEach(i => {
        if (i.talepCesidi == item.talepCesidi) {
          i.yapildi = item.yapildi;
        }
      });
      localStorage.setItem("items", JSON.stringify(items));
    }
  
    getItems() {
      if (this.displayAll) {
        return this.model.items;
      }
      return this.model.items.filter(item => !item.yapildi);
    }
  
    getName() {
      return this.model.name;
    }
  
    displayCount() {
      return this.model.items.filter(i => i.yapildi).length;
    }
  
    getBtnClasses() {
      return {
        'disabled': this.inputtext.length == 0,
        'btn-secondary': this.inputtext.length == 0,
        'btn-primary': this.inputtext.length > 0
      };
    }
    rejectItem(item: AppItem): void {
      const index = this.model.items.indexOf(item);
      if (index !== -1) {
          this.model.items.splice(index, 1); // Öğeyi listeden kaldır
          localStorage.setItem("items", JSON.stringify(this.model.items)); // Değişiklikleri localStorage'e kaydet
      }
  }
  
  
  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.selectedFileName = selectedFile.name;
      this.selectedFileContent = selectedFile;
    } else {
      this.selectedFileName = ''; // Dosya seçilmediğinde selectedFileName'i boş bir dize yapın
    }
  }
  
  createFilePreview(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
        // FileReader tarafından dosya okunduğunda yapılacak işlemler
        const filePreview = e.target.result;
        console.log("Dosya Önizlemesi: ", filePreview);
        // Burada dosya önizlemesini kullanarak istediğiniz işlemi yapabilirsiniz, örneğin bir resim görüntüleyicisine ekleyebilirsiniz.
    };
    reader.readAsDataURL(file);
  }
  
  openFile() {
  const fileName = "";
  window.open(`/dosyalar/${fileName}`, '_blank'); // Dosya adına uygun bir yol belirtin
  }

  showOptionsPopup: boolean = false; // Seçenekler pop-up'ını gösterme durumu

  showOptions(event: MouseEvent): void {
      
      this.showOptionsPopup = true;
      event.stopPropagation(); 
      
  }

  redirectToAssignedTasks(user: string): void {
   
    this.showOptionsPopup = false;
}
assignedPersons: string[] = ["Person 1", "Person 2", "Person 3"]; 
  
assignPersonToTask(item: AppItem, assignedPerson: string) {
  item.assignedPerson = assignedPerson;
  
}


}
