//створити новий масив який буде мати тільки назви комант   
//новий масив не повинен мати те ж саме посилання на значення що і старий і не повинен видозмінювати старий масив
//є два методи виконання завдання:

//використати СПРЕТ оператор
//використати метод Map


const groupA = [
    "FC Arsenal London",
    "FC Real Madrid",
    "FC Bayern Munich",
];
//метод меп
const createNewTeamsFormat = (teams) => {
    return teams.map(item => item.split(" ")[1]);//завдяки методу map нам вдалось створити новий масив не змінюючи значень старого
}

console.log(createNewTeamsFormat(groupA));
console.log(groupA);
//оператор Спрет

function createNewTeamsFormat2(teams){
    teams.forEach((item,index) =>{
    const onlyClubName = item.split(' ')[1];
    teams[index] = onlyClubName;
    })
    return teams;
}
const newArr = [...groupA]   //Спрет оператор(створює окремий масив з окремим посиланням)
console.log(createNewTeamsFormat2(newArr));//ми передали масив з окремим посиланням
console.log(groupA)