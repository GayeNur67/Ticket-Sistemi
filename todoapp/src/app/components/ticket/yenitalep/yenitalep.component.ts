import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { Model } from '../../../model';
import { AppItem } from '../../../app.item';
declare var $: any;
declare let alertify: any;

interface ModelItem {
  name: string;
  url: string;
  children?: ModelItem[];
}
@Component({
  selector: 'app-yenitalep',
  templateUrl: './yenitalep.component.html',
  styleUrl: './yenitalep.component.css'
})
export class YenitalepComponent {
  selectedFileContent: any; // selectedFileContent özelliğini tanımlıyoruz
  selectedFileName: string = ''; // Dosya adını saklamak için bir özellik tanımlıyoruz

  modelItems: { [key: string]: ModelItem[] } = {};

  constructor(private http: HttpClient, private router: Router) {
    this.model.items = this.getItemsFromLS();
  }


  tesisSecenekleri: string[] = ['Bartın', 'Meksika', 'Bulgaristan', 'Gebze', 'Amerika'];
  bolumSecenekleri:string[]=['BT-Yazılım', 'BT-Donanım'];
  talepTipiSecenekleri:string[]=['Raporlama','Workflow', 'BERG','EDI','Web BERG','SAP','RPA','Hand Terminal'];
  talepCesidiSecenekleri:string[]=['Geliştirme', 'Destek', 'Toplantı', 'İzin'];
  isinTuruSecenekleri:string[]=['Genel', 'Destek', 'Yazılım', 'Donanım', 'Server'];
  

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  assignedPerson: string='';
  searchTerm: string = '';
  displayAll: boolean = true;
  inputtext: string = '';
  tesis:  string = '';
  bolum:  string = '';
  talepTipi: string = '';
  isinTuru: string = '';
  talepEden: string = '';
  acilDurum: string = '';
  description: string = '';
  file: File | null;
  fileName: string | null;
  model = new Model();
  filterText: string="";
  selectedPerson:string;
  
  onSubmit() {
   
  }
  
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
      yapildi: false,
      tesis: this.tesis,
      bolum: this.bolum,
      talepTipi: this.talepTipi,
      talepCesidi: this.inputtext,
      isinTuru: this.isinTuru,
      talepEden: this.talepEden,
      acilDurum:this.acilDurum,
      description: this.description,
      file: this.selectedFileContent, // Dosya içeriğini ekleyin
      fileName: this.selectedFileName, // Dosya adını ekleyin
      assignedPerson: this.assignedPerson
    };
  
    this.model.items.push(data);
    let items = this.getItemsFromLS();
    items.push(data);
    localStorage.setItem("items", JSON.stringify(items));
  
    // Kullanıcının girdiği değerleri sıfırla
    this.tesis = "";
    this.bolum = "";
    this.talepTipi = "";
    this.isinTuru = "";
    this.talepEden = "";
    this.acilDurum="";
    this.description = "";
    this.inputtext = "";
    this.selectedFileName = ""; // Seçilen dosya adını sıfırla
    this.selectedFileContent = null; // Seçilen dosya içeriğini sıfırla    
  } 
    getItemsFromLS() {
      let items: AppItem[] = [];
      let value = localStorage.getItem("items");
      if (value != null) {
        items = JSON.parse(value);
      }
      return items;
    }
    getName() {
      return this.model.name;
    }
    getBtnClasses() {
      return {
        'disabled': this.inputtext.length == 0,
        'btn-secondary': this.inputtext.length == 0,
        'btn-primary': this.inputtext.length > 0
      };

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
// Diğer kodlar...





}
  

