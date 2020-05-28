import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelkeygenService {

  constructor() { }

  getCombination(input: number[]) {


    const generateCombinations = function (keypad, input, res, index) {


      if (index === -1) {
        //console.info(res + " ");
        result.push(res)
        return
      }
      var digit = input[index];
      {
        var arr = keypad[digit];
        for (var i = 0; i < arr.length; i++) {
          var c = arr[i];
          {
            generateCombinations(keypad, input, c + res, index - 1);
          }
        }
      }
    };

    var result = []
    var keypad = [['0'], ['1'],
    ['2', 'A', 'B', 'C'], ['3', 'D', 'E', 'F'], ['4', 'G', 'H', 'I'],
    ['5', 'J', 'K', 'L'], ['6', 'M', 'N', 'O'], ['7', 'P', 'Q', 'R', 'S'],
    ['8', 'T', 'U', 'V'], ['9', 'W', 'X', 'Y', 'Z']];

    generateCombinations(keypad, input, "", input.length - 1);

    return result;
  }
}
