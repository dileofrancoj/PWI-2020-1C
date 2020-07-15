import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mascotas",
  templateUrl: "./mascotas.component.html",
  styleUrls: ["./mascotas.component.css"],
})
export class MascotasComponent implements OnInit {
  descripcionMascotas: any = [
    { nombre: "Amazonas", tipo: "🐕", edad: "9 meses" },
    { nombre: "lyon", tipo: "🐱", edad: "2 años" },
    { nombre: "Lola", tipo: "😸", edad: "7 años" },
  ];
  constructor() {}

  ngOnInit() {}
}
