import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public from: FormGroup;

  @ViewChild('filter') data:any;

  constructor(private service: DataService,
    private formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.formulario()
    this.buscador()
  }
  formulario() {
    this.from = this.formBuilder.group({
      search: ['']
    })
  }
  buscador() {
    let va;
    let search = this.from.value.search
    if (search.trim().length >= 1) {
      this.service.getRickAndMory().subscribe(data => {
        if (data != null) {
          va = data.results
          console.log(va);
          let hola = va.filter(v => v.status.toUpperCase().toLowerCase().startsWith(search.toUpperCase().toLowerCase()) || v.species.toUpperCase().toLowerCase().startsWith(search.toUpperCase().toLowerCase()) || v.name.toUpperCase().toLowerCase().startsWith(search.toUpperCase().toLowerCase())
          )
          console.log(hola)
        }
      })


    } else {
      console.log('xd');

    }
  }

}
