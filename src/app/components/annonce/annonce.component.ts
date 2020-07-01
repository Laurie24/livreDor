import { Component, OnInit } from '@angular/core';
import {Annonce} from "../../models/annonce";
import {AnnonceService} from "../../services/annonce.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  annonce: Annonce[];
  isLoading: boolean;

  constructor(private annonceService: AnnonceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.annonceService.getAllAnnonce().subscribe((data: Annonce[]) => {
      this.annonce = data;
      this.isLoading = false;
    });
  }

  deleteAnnonce(annonce: Annonce){
    this.isLoading = true;
    this.annonceService.deleteChaussure(annonce.id).subscribe(data => {
      this.annonceService.getAllAnnonce().subscribe(newDataChaussure => {
        this.annonce = newDataChaussure;
        this.isLoading = false;
        this.toastr.success('L\'annonce a bien été supprimée!', 'Succès!');
      });
    });
  }

}
