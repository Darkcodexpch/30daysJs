// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's

        // const inventorBornData = inventors.filter((item)=>item.year >= 1500 && item.year <= 1600)
        // console.table(inventorBornData)


      // Array.prototype.map()
      // 2. Give us an array of the inventor first and last names
    //    const inventorFullName = inventors.map((item)=>console.table(`${item.first} ${item.last}`));
      
      // Array.prototype.sort()
      // 3. Sort the inventors by birth date, oldest to youngest
        //   let sortList = inventors.sort((a,b)=> a.year > b.year ? 1 : -1)
        //   console.table(sortList)
        
    // Note sort Compare function allow two parameter like i go with a and b
    // if a is less than b by some ordering criterion
    //     return -1;
    //   
    //   if a is greater than b by the ordering criterion
    //     return 1;
    //   
    //   // a must be equal to b
    //   return 0;  
      
  
  
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?

        // let inventorLives = inventors.reduce((acc,curr)=> acc + (curr.passed - curr.year),0);
        // console.log(inventorLives);
    
      // 5. Sort the inventors by years lived
    //   let inventorLives = inventors.sort((a,b)=>{
    //     let first = (a.passed - a.year);
    //     let last = (b.passed - b.year);
    //     // console.log(first)
    //     return  first > last ? -1 : 1
    //   });
    //   console.table(inventorLives)
         

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  
      
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
  
      
  