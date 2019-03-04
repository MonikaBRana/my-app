import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  showList : Boolean = true;
  showDetails : Boolean = false;
  plannetDtl : Plannets ;
  filteredPlannets : Plannets[];
  title : String = 'Star Wars Extended Universe';
  plannetList : Plannets[] = [
    {population : 200, name : 'Mercury', trnDtls : '74.8 million km²', additionalInfo : ''},
    {population : 40, name : 'Venus', trnDtls : '460.2 million km²', additionalInfo : ''},
    {population : 60, name : 'Earth', trnDtls : '510.1 million km²', additionalInfo : ''},
    {population : 80, name : 'Mars', trnDtls : '144.8 million km²', additionalInfo : ''},
    {population : 140, name : 'Jupiter', trnDtls : '61.42 billion km²', additionalInfo : ''},
    {population : 120, name : 'Saturn', trnDtls : '42.7 billion km²', additionalInfo : ''},
    {population : 130, name : 'Uranus', trnDtls : '8.083 billion km²', additionalInfo : ''},
    {population : 120, name : 'Neptune', trnDtls : '7.618 billion km²', additionalInfo : ''},
    {population : 10, name : 'Pluto', trnDtls : '16.6 million km²', additionalInfo : ''},
   ];
   constructor(){
    this.filteredPlannets = this.plannetList;
  }
   
     showPlannetDetails(plannet) : void{
    this.showList = false;
    this.showDetails = true;
    this.plannetDtl = plannet;
     }

    onBackClick(){
      location.reload();
    }

   _listFilter = '';
   get listFilter(): string {
     return this._listFilter;
   }
   set listFilter(value: string) {
     this._listFilter = value;
     this.filteredPlannets = this.listFilter ? this.performFilter(this.listFilter) : this.plannetList;
   }

   performFilter(filterBy: string): Plannets[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.plannetList.filter((plannet: Plannets) =>
    plannet.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}


interface Plannets {
  population: number;
  name: string;
  trnDtls: string;
  additionalInfo : string;
}
