import { Injectable } from '@angular/core'
import {Question} from "../models/Question";


@Injectable()
export class DataService {

  questions:Question[];

  constructor() {
    // this.questions = [
    //   {
    //     text:'What is your name?',
    //     answer:'My name is Sypher.',
    //     hide:true
    //   },
    //   {
    //     text:'What is your color?',
    //     answer:'My skin is black.',
    //     hide:true
    //   },
    //   {
    //     text:'What is pets\' name?',
    //     answer:'His name is Cleo.',
    //     hide:true
    //   }
    // ];
  }

  //===get questions from local storage===
  getQuestions(){
    if(localStorage.getItem('questions')=== null){
      this.questions = [];
    }else{
      this.questions = JSON.parse( localStorage.getItem('questions') );
    }
    return this.questions;
  }

  //===add questions to local storage===
  addQuestion(question:Question){
    // Init local variable
    let questions;

     if(localStorage.getItem('questions')=== null){
      questions = [];
      //Push new question to array
       questions.unshift(question);
       //ste new array to local storage
       localStorage.setItem('questions', JSON.stringify(questions));
    }else{
      questions = JSON.parse(localStorage.getItem('questions'))
       //add new question
       questions.unshift(question);
      //reset local storage
       localStorage.setItem('questions',  JSON.stringify(questions));
    }
  }

  //===remove questions to local storage===
  removeQuestion(question:Question){

    for (let i = 0; i< this.questions.length; i++ ){
        if(question == this.questions[i]){
          this.questions.splice(i, 1);
          localStorage.setItem('questions', JSON.stringify(this.questions));

        }
    }
  }

}
