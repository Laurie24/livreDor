import { Component, OnInit } from '@angular/core';
import {Annonce} from "../../models/annonce";
import {ActivatedRoute} from "@angular/router";
import {AnnonceService} from "../../services/annonce.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css']
})
export class DetailAnnonceComponent implements OnInit {
  isLoading: boolean;
  id: number;
  annonce: Annonce;
  annonces: Annonce[];
  constructor(private route: ActivatedRoute, private annonceService: AnnonceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.annonceService.getOneChaussureById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Annonce) => {
      this.annonce = data;
      this.isLoading = false;
    });
  }
  deleteAnnonce(annonce: Annonce){
    this.isLoading = true;
    this.annonceService.deleteChaussure(annonce.id).subscribe(data => {
      this.annonceService.getAllAnnonce().subscribe(newDataChaussure => {
        this.annonces = newDataChaussure;
        this.isLoading = false;
        this.toastr.success('L\'annonce a bien été supprimée!', 'Succès!');
      });
    });
  }

}
