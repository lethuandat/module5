import {Component, OnInit} from '@angular/core';
import {IWord} from "../i-word";
import {DictionaryService} from "../dictionary.service";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionaryList: IWord[] = [];
  keyword: string;

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dictionaryList = this.dictionaryService.getAll();
  }
}
