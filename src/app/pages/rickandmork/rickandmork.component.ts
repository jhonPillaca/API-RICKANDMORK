import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-rickandmork',
  templateUrl: './rickandmork.component.html',
  styleUrls: ['./rickandmork.component.scss']
})
export class RickandmorkComponent implements OnInit {

  form: FormGroup;

  constructor(private service: DataService,
    private fb: FormBuilder) {

  }
  rickandmork: any;
  ngOnInit(): void {
    this.formulario();
    this.buscador();
    this.service.getRickAndMory().subscribe(data => {
      localStorage.setItem("rick", JSON.stringify(data.results))
    })
    this.getRickandMory();

    console.log(this.rickandmork)
  }

  getRickandMory() {
    if (localStorage.getItem("rick")) {
      this.rickandmork = JSON.parse(localStorage.getItem("rick"))
    } else {
      this.service.getRickAndMory().subscribe(data => {
        if (this.form.get('search').value != '') {
          this.buscador()
        } else {
          this.rickandmork = data.results;

        }

      })
    }
  }

  formulario() {
    this.form = this.fb.group({
      search: ['']
    })
  }
  buscador() {
    let va;
    let search = this.form.value.search
    /*  if (this.form.get('search').value == '') {
       this.service.getRickAndMory().subscribe(data => {
         this.rickandmork = data;
       })
     } else { */
    this.service.getRickAndMory().subscribe(data => {
      if (search.trim().length >= 1) {
        if (data != undefined || data != null) {
          va = data.results
          console.log(va);
          let element = va.filter(v => v.status.toUpperCase().toLowerCase().includes(search.toUpperCase().toLowerCase()) || v.species.toUpperCase().toLowerCase().includes(search.toUpperCase().toLowerCase()) || v.name.toUpperCase().toLowerCase().includes(search.toUpperCase().toLowerCase()))
          this.rickandmork = element;
          console.log(this.rickandmork);
        }
      } else {
        va = data.results
        let arr : Array<any> = va;
        console.log(arr);

        this.rickandmork = arr
      }
    })



    //}

  }


}
