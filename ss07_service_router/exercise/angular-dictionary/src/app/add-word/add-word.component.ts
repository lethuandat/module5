import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DictionaryService} from "../dictionary.service";

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {

  constructor(private dictionaryService: DictionaryService) {
  }

  wordForm: FormGroup = new FormGroup(
    {
      word: new FormControl(),
      mean: new FormControl()
    }
  );

  ngOnInit(): void {
  }

  add() {
    const newWord = this.wordForm.value;
    this.dictionaryService.save(newWord);
    this.wordForm.reset();
    alert('Add word successful');
  }
}
