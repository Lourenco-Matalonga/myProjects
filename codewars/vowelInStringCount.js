function getCount(str) {
    var vowelsCount = 0;
    var vowelsList = 'aeiou';
    
    for (let i = 0; i < str.length; i++){
      if (vowelsList.indexOf(str[i]) !== -1){ // for each str index position it checks if it is equal to any vowel from vowelList. If it is then it return the vowel index of the vowelList string and increments 1 to the vowelCount
                                              // if it returns -1, it means the string in that position has no vowel matching our vowelList and does nothing!
        vowelsCount += 1
      }
    }
    return vowelsCount;
  }

  console.log(getCount('Dev sud pitocsa'));