import { Component, OnInit } from '@angular/core';
import {Annonce} from "../../models/annonce";
import {AnnonceService} from "../../services/annonce.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  isLoading: boolean;
  annonce = new Annonce();
  annonceForm: Annonce;
  constructor(private  annonceService: AnnonceService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.annonceForm = new Annonce();
  }

  addAnnonce(): void{
    this.isLoading = true;
    this.annonceService.addChaussure(this.annonce).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/annonce']);
      this.toastr.success('L\'annonce a bien été ajoutée!', 'Succès!');
    });
  }
}
