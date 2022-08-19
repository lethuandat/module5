import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  word = "";
  mean = "";

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.word = paramMap.get('word');
      const dictionary = this.getOne(this.word);
      this.word = dictionary.word;
      this.mean = dictionary.mean;
    })
  }

  ngOnInit(): void {
  }

  getOne(word: string) {
    return this.dictionaryService.findByWord(word);
  }
}
