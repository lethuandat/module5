import {Injectable} from '@angular/core';
import {IWord} from "./i-word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryList: IWord[] = [
    {
      word: "Rain",
      mean: "\n" +
        "Danh từ\n" +
        "mưa\n" +
        "rain, wet\n" +
        "lệ nhỏ như mưa\n" +
        "rain\n" +
        "sự khóc như mưa\n" +
        "rain\n" +
        "sự khóc ròng ròng\n" +
        "rain\n" +
        "Động từ\n" +
        "mưa\n" +
        "rain\n" +
        "bị đánh tới tấp như mưa\n" +
        "rain\n" +
        "nước mắt chảy đầm đìa\n" +
        "rain"
    },
    {
      word: "Windy",
      mean: "\n" +
        "Tính từ\n" +
        "bị gió cuốn\n" +
        "windy\n" +
        "có nhiều gió\n" +
        "windy, blowy\n" +
        "làm sôi bụng\n" +
        "windy\n" +
        "nhiều gió\n" +
        "windy"
    },
    {
      word: "Sunny",
      mean: "\n" +
        "Tính từ\n" +
        "có ánh nắng\n" +
        "sunny\n" +
        "hớn hở\n" +
        "radiant, sunny, merry, buoyant, gay, lively\n" +
        "nắng\n" +
        "sunny"
    },
    {
      word: "Warm",
      mean: "\n" +
        "Động từ\n" +
        "đun\n" +
        "heat, warm\n" +
        "làm cho ấm\n" +
        "warm\n" +
        "nấu\n" +
        "cook, hot, warm\n" +
        "Tính từ\n" +
        "ẩm\n" +
        "warm, moist, wet, damp, dank\n" +
        "nóng\n" +
        "hot, warm, heated, forward\n" +
        "nồng nhiệt\n" +
        "warm, hot\n" +
        "Danh từ\n" +
        "đun cho nóng\n" +
        "warm\n" +
        "sự đốt\n" +
        "warm, warming\n" +
        "sưởi cho ấm\n" +
        "warm"
    },
    {
      word: "Cold",
      mean: "\n" +
        "Tính từ\n" +
        "cảm hàn\n" +
        "cold\n" +
        "chứng cảm phong\n" +
        "cold\n" +
        "lạnh lùng\n" +
        "cold, indifferent, stony, frostbitten, frosthardy, stonyhearted\n" +
        "phát lạnh\n" +
        "cold\n" +
        "rét\n" +
        "cold, rusty\n" +
        "vô tình\n" +
        "loveless, heartless, ruthless, unconcerned, cold, merciless\n" +
        "Danh từ\n" +
        "cảm\n" +
        "cold\n" +
        "lạnh\n" +
        "cold\n" +
        "lãnh đạm\n" +
        "cold"
    },
    {
      word: "Hot",
      mean: "\n" +
        "Tính từ\n" +
        "cay\n" +
        "hot, piquant, poignant\n" +
        "dâm dục\n" +
        "lewd, bawdy, lustful, hot, libidinous, lubricous\n" +
        "dâm đãng\n" +
        "hot\n" +
        "nêm gia vị\n" +
        "hot\n" +
        "nóng\n" +
        "hot, warm, heated, forward\n" +
        "nóng nải\n" +
        "eager, hard up, headlong, hot, hotblooded\n" +
        "động cởn\n" +
        "hot\n" +
        "nồng\n" +
        "hot\n" +
        "hăng hái\n" +
        "eager, keen, zealous, mettlesome, corky, hot\n" +
        "nồng nhiệt\n" +
        "warm, hot\n" +
        "kịch liệt\n" +
        "vehement, intense, furious, strenuous, fiendish, hot\n" +
        "nứng\n" +
        "hot\n" +
        "sắc tươi quá\n" +
        "hot\n" +
        "Động từ\n" +
        "nấu\n" +
        "cook, hot, warm"
    },
    {
      word: "Thunder",
      mean: "Bản dịch của thunder\n" +
        "Động từ\n" +
        "kêu vang\n" +
        "chime, clang, ding, crash, resound, thunder\n" +
        "kêu như sấm\n" +
        "thunder\n" +
        "nổi sấm\n" +
        "thunder\n" +
        "Danh từ\n" +
        "sấm\n" +
        "thunder\n" +
        "tiếng sét đánh\n" +
        "thunder, thunderstroke, clap"
    },
    {
      word: "Storm",
      mean: "\n" +
        "Danh từ \n" +
        "mưa giông\n" +
        "storm\n" +
        "bão\n" +
        "storm, typhoon, hurricane\n" +
        "bảo tố\n" +
        "storm, down wind, thundercloud, tornado\n" +
        "sự tấn công\n" +
        "assault, aggression, aging, storm\n" +
        "Động từ\n" +
        "đột kích\n" +
        "swoop, charge, surprise, storm\n" +
        "thổi mạnh dử dội\n" +
        "storm"
    },
    {
      word: "Tornado",
      mean: "\n" +
        "Danh từ\n" +
        "bảo tố\n" +
        "storm, down wind, thundercloud, tornado\n" +
        "gió bảo\n" +
        "tornado\n" +
        "lốc xoáy gió\n" +
        "tornado"
    },
    {
      word: "Cloudy",
      mean: "\n" +
        "Từ loại\tBản dịch\tBản dịch ngược\tTần suất\n" +
        "help_outline\n" +
        "Tính từ\n" +
        "âm u\n" +
        "murky, dim, nebulous, cloudy\n" +
        "đen đặc\n" +
        "cloudy\n" +
        "khó hiểu\n" +
        "obscure, unintelligible, abstract, recondite, abstruse, cloudy\n" +
        "lờ mờ\n" +
        "dim, vague, dubious, obscure, blear, cloudy\n" +
        "mập mờ\n" +
        "vague, dim, dubious, indeterminate, loose, cloudy\n" +
        "nhiều mây\n" +
        "cloudy\n" +
        "sầm tối\n" +
        "cloudy\n" +
        "u tối\n" +
        "cloudy"
    }
  ];

  constructor() {
  }

  getAll(): IWord[] {
    return this.dictionaryList;
  }

  findByWord(word: string): IWord {
    for (let i = 0; i < this.dictionaryList.length; i++) {
      if (word === this.dictionaryList[i].word) {
        return this.dictionaryList[i];
      }
    }
    return {
      word: "Not found", mean: "Try again"
    };
  }

  save(newWord: IWord): void {
    this.dictionaryList.push(newWord);
  }
}
