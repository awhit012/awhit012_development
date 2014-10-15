function sudokuSolver(){
  that = this;

  this.solve = function(puzzle){
    that.puzzle = puzzle;
    that.splitStringIntoArray(puzzle)

  }

  this.splitStringIntoArray = function(){
    that.arrayOfBoxValues = that.puzzle.split("");

    that.parseArray(that.arrayOfBoxValues);

  };

  this.parseArray = function(arrayOfBoxValues){
    that.parsedArray = [];
    length = arrayOfBoxValues.length

    for(var i = 0; i < length; i++){
      that.parsedArray.push( parseInt(arrayOfBoxValues[i]) )
    };

    that.devideIntoRows(that.parsedArray);
  }

  this.devideIntoRows = function(array){
    this.row1 = [that.parsedArray[0], that.parsedArray[1], that.parsedArray[2]]
    this.row2 = [that.parsedArray[3], that.parsedArray[4], that.parsedArray[5]]
    this.row3 = [that.parsedArray[6], that.parsedArray[7], that.parsedArray[8]]
    this.allRows = [this.row1, this.row2, this.row3]

    that.attackRow(that.allRows);
    that.devideIntocollumns(that.allRows)

  };

  this.attackRow = function(rows){
    var rowsLength = rows.length

    for(var i = 0; i < rowsLength; i++){
      that.generatePossibles( rows[i], rowsLength )
    }
  }


  this.generatePossibles = function(row, number){
    var possibleAnswers = []
    for(var i = 0; i < number; i++){
      possibleAnswers.push(i + 1)
    };

    that.findSolvedSquare(row, possibleAnswers);

  }

  this.findSolvedSquare = function(row, possibleAnswers){
    var rowLength = row.length
    for(var i = 0; i < rowLength; i++){
      if (row[i] !== 0){
        that.removeSolvedSquareFromPossibleAnswers(row, row[i], possibleAnswers)
      }
    };
    that.guessSquare(row, possibleAnswers)

  };

  this.removeSolvedSquareFromPossibleAnswers = function( row, solvedSquare, possibleAnswers){
    var indexOfSolution = possibleAnswers.indexOf(solvedSquare);

    if (indexOfSolution > -1){
      possibleAnswers.splice(indexOfSolution, 1);
    }
    return possibleAnswers
  }

  this.guessSquare = function( row, possibleAnswers ) {
    for (var i = 0; i < length; i++){
      if (row[i] == 0){
        row[i] = possibleAnswers[0];
        that.findSolvedSquare( row, possibleAnswers);
        break
      }
    }
    console.log(row)
  }

  this.devideIntocollumns = function(array){
    this.collumn1 = [that.allRows[0][0], that.allRows[1][0], that.allRows[2][0]];
    this.collumn2 = [that.allRows[0][1], that.allRows[1][1], that.allRows[2][1]];
    this.collumn3 = [that.allRows[0][2], that.allRows[1][2], that.allRows[2][2]];
    this.allCollumns = [this.collumn1, this.collumn2, this.collumn3]

    console.log(that.allCollumns)
    that.attackCollumn(that.allCollumns);

  };

  this.attackCollumn = function(collumns){
    var collumnsLength = collumns.length

    for(var i = 0; i < collumnsLength; i++){
      that.generatePossibles( collumns[i], collumnsLength )
      that.findCollumnsWithNoDuplicates(collumns[i], i);
    }
  }

  // find collumns with no duplicates
  // kill all but collumns and rows with no duplicates,
  // add back the original hints,
  // restart whole thing

  this.findCollumnsWithNoDuplicates = function(collumn, collumnIndex){
    var i,
    len=collumn.length,
    out=[],
    obj={};

    for (i=0;i<len;i++) {
      obj[collumn[i]]=0;
    }
    for (i in obj) {
      out.push(i);
    }

    if (out.length == collumn.length){
      console.log(collumn + ' is done')
    }

    else { that.removeGuessFromCollumn(collumn, collumnIndex) }

  };

  this.removeGuessFromCollumn = function(collumn, collumnIndex){
    var collumnsLength = collumn.length
    for(var i = 0; i < collumnsLength; i++){
      if (collumn[i] != that.allRows[i][collumnIndex]){
        collumn[i] = 0;
      }
    }
    console.log('*' + collumn)
  }

};
var myPuzzle = new sudokuSolver();
myPuzzle.solve('030000001')



// [ 1, 3, 2 ]
// [ 1, 2, 3 ]
// [ 2, 3, 1 ]

// [ 0, 3, 2 ]
// [ 0, 0, 3 ]
// [ 0, 0, 1 ]
