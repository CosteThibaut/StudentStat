import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/app/stat/canvasjs.min.js';
import { StudentsService } from 'src/app/service/students.service';


@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  chart : any;
  constructor(private stdService : StudentsService) { }

	ngOnInit() {
		this.chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Nombre de personne par promotion"
		},
		data: [{
			type: "column",
			dataPoints: this.getData1()
		}]
	});
		
	this.chart.render();
    }

    getData1(){
    	let students = this.stdService.etudiants;
    	let retour = [];
    	let tmp = false;
    	let tmp2;
    	for (var i = 0; i < students.length; i++) {
    		tmp = false;
    		for (var j = 0; j < retour.length; j++) {
    			if (retour[j].label == students[i].promo) {
    				retour[j].y+=1;
    				tmp = true;
    			}
    		}
    		if (!tmp && students[i].droit=="user") {
    			tmp2 = {y:1,label:students[i].promo};
    			retour.push(tmp2);
    		}
    		
    	}
    	return retour;
    }


    getData2(){
    	let students = this.stdService.etudiants;
    	let retour = [{y:0,label:"DevOps"},{y:0,label:"FullStack"},{y:0,label:"Autre"}];
    	let tmp = false;
    	for (var i = 0; i < students.length; i++) {
    		tmp=false;
    		if (students[i].metier=="DevOps") {
    			retour[0].y+=1;
    			tmp=true;
    		}
    		if (students[i].metier=="FullStack") {
    			retour[1].y+=1;
    			tmp=true;
    		}
    		if (!tmp) {
    			retour[2].y+=1;
    		}
    	}
    	return retour;
    }

    render1(){
		this.chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Nombre de personne par promotion"
		},
		data: [{
			type: "column",
			dataPoints: this.getData1()
		}]
	});
		
	this.chart.render();
    }

    render2(){
		this.chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Proportion de chaque profession"
		},
		data: [{
			type: "column",
			dataPoints: this.getData2()
		}]
	});
		
	this.chart.render();
    }
}
