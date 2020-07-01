import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {AnnonceService} from "../../services/annonce.service";
import {Annonce} from "../../models/annonce";

@Component({
  selector: 'app-edit-annonce',
  templateUrl: './edit-annonce.component.html',
  styleUrls: ['./edit-annonce.component.css']
})
export class EditAnnonceComponent implements OnInit {
  annonce: Annonce;
  isLoading: boolean;
  constructor(private toastr: ToastrService, private activatedRoute: ActivatedRoute, private annonceService: AnnonceService, private router: Router, ) { }

  ngOnInit(): void {
    this.isLoading = true;
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.annonceService.getOneChaussureById(id).subscribe((data: Annonce) => {
      this.annonce = data;
      this.isLoading = false;
    });
  }

  editAnnonce(){
    this.annonceService.edit(this.annonce).subscribe(then => {
      this.router.navigate(['/annonce']);
    });
    this.toastr.success('L\'annonce a bien été éditée!', 'Succès!');
  }

}
