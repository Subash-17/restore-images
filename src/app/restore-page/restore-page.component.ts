import { Component,OnInit,ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Upload } from "upload-js";
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-restore-page',
  templateUrl: './restore-page.component.html',
  styleUrls: ['./restore-page.component.scss']
})
export class RestorePageComponent implements OnInit {
  upload = Upload({ apiKey: "public_12a1y3S2ESc1TLCvtE64ABjMS3oD" }); // Your real API key.
  restoredImage=""
  imageUrl="";
  imageUploaded=false;
  isImageUploading=false
  imageId:string | undefined
  @ViewChild('imageUpload') fileInput: ElementRef | undefined;
  constructor(private apiService: ApiService,private http: HttpClient) { }
  ngOnInit(): void {
  }
   onBasicUpload=async (e: any) =>{
    const onProgress = ({ }) => {
      console.log(`File uploading: complete.`)
      this.isImageUploading=true;
      // this.imageUploaded=false;
    }
    console.log("Eeeeee", e)
    const reader = new FileReader();
    let formData=new FormData()
     let file  = e.target.files[0];
  const { fileUrl } = await this.upload.uploadFile(file, { onProgress });
  console.log(fileUrl)

    this.imageUrl = URL.createObjectURL(e.target.files[0]);
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    let sampleData= {
        url:fileUrl
        }


    // call the api in service
    try{
    this.apiService.getPredictions(sampleData).subscribe(data=>{
      console.log("Image uploaded",data)
      this.imageUploaded=true
      this.isImageUploading=false;
      this.restoredImage=data.output
      this.imageId=data.id
    })

  }
  catch(error){
    console.log("Error in image upload",error)
    this.imageUploaded=true
    this.isImageUploading=false;
  }
    
  }
  uploadImage(){
    console.log("Upload button clicked")
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }
  // download image
downloadImage() {

  const url = this.restoredImage; 
  const extension = url.split('.').pop();
  const filename=`image.${extension}`
  this.http.get(url, { responseType: 'blob' }).subscribe((blob: Blob) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  });

}
}

