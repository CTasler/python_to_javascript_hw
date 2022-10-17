'use strict';
const melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba']

function countMelons(melons){
    const melonCount = {};
    for (const melon of melons){
        if (melon in melonCount){
            melonCount[melon] += 1;
        }
        else{
            melonCount[melon] = 1;
        }
    }
    return melonCount;
}


console.log(countMelons(melonsToAdd));


// Alternate methods: 
// Using Array.reduce
// const melonCounts = melonsToAdd.reduce((mCounts, melon) => {
//     if (mCounts[melon]) {
//       mCounts[melon] += 1;
//     } else {
//       mCounts[melon] = 1;
//     }
  
//     return mCounts;
//   }, {});
  
//   console.log(melonCounts);

// ------------------------------------------------

// Using short-circuit evaluation to set count

// const melonCounts = melonsToAdd.reduce((mCounts, melon) => {
//   mCounts[melon] = (mCounts[melon] || 0) + 1;

//   return mCounts;
// }, {});

// console.log(melonCounts);