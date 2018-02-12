import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: any;
}
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  public dataTable: DataTable = {
    headerRow: [ 'Id', 'FirstName', 'LastName', 'Username', 'Email', 'Birthday' ],
    footerRow: [ 'Id', 'FirstName', 'LastName', 'Username', 'Email', 'Birthday' ],
    dataRows: []
  };
  public dataRows = [];
   
  ngOnInit() {
  }
  getUsers() {
    
    this.httpClient.get('https://serverlesswiekonek.azurewebsites.net/api/olgak/users')
      .subscribe(function (dataUsers) {
        
       console.log(dataUsers)
      /*this.dataTable.dataRows = dataUsers;
        
        setTimeout(function () {
          this.initTable();
        }, 100);*/

   }
      )}
  /*private initTable(){
    var table =$('#datatables').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        responsive: true,
        language: {
        search: "_INPUT_",
        searchPlaceholder: "Search records",
        }
      });*/

  getMovies() {
    const headerDict = {
      'Authorization': 'Bearer example-token',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.httpClient.get('https://serverlesswiekonek.azurewebsites.net/api/olgak/movies', requestOptions)
    .subscribe(function (dataMovies) {
      console.log(dataMovies)
    /*this.dataTable.dataRows = dataMovies;

      setTimeout(function () {
        this.init_datatable();
      }, 100);

    });*/
  }
