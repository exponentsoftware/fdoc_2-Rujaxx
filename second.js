const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];

// const scoreFilter= (users)=>{
//     let result = users.filter((score)=> score.scores >= 85)
//     return result
// }

// console.log(scoreFilter(users))


const addUser =(user)=>{
	let User = users.find(User => User.name === user.name);
	if(!User){
		users.push(user);
	}else{
		console.log('user  exists')
	}
}

let user = {name:"Rujan",scores:90,skills:['HTMl', 'CSS', 'JS'],age:22};
	addUser(user);
console.log(users)

const addUserSkill =(user)=>{
	let User = users.find(User => User.name === user.name);
	if(User){
		User.skills.push(user.skills);
        console.log('added')
	}else{
		console.log('user does not exist')
	}
}

var user = {name:"Thomas",skills:'sa'};
	addUserSkill(user);
console.log(users)

const editUser =(user)=>{
	let User = users.find(User => User.name === user.name);
	if(User){
		User.skills.push(user.skills);
        User.age=user.age
        User.scores=user.scores
//       User.skills=user.skills
        console.log('added')
	}else{
		console.log('user does not exist')
	}
}

var user = {name:"Thomas",skills:'sa',age:22,scores:55};
	editUser(user);
console.log(users)
