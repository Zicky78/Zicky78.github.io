const music = [
	{
		title: 'Too Tired: KALI',
		id: '1',
		link: '../assets/music/altrock/kali.mp3',
	},
	{
		title: 'Rainy Taxi: Spoon',
		id: '2',
		link: '../assets/music/altrock/spoon.mp3',
	},
	{
		title: 'Morbid Mind: Jack Kays',
		id: '3',
		link: '../assets/music/altrock/jack.mp3',
	},
	{
		title: 'This Old Dark Machine: James Vincent McMorrow',
		id: '4',
		link: '../assets/music/folk/james.mp3',
	},
	{
		title: 'I Will Remain: Mattew and the Atlas',
		id: '5',
		link: '../assets/music/folk/matthew.mp3',
	},
	{
		title: 'Facing West: The Staves',
		id: '6',
		link: '../assets/music/folk/staves.mp3',
	},
	{
		title: 'Pastel Rain: Sangatsu no Phantasia',
		id: '7',
		link: '../assets/music/jpop/SnP.mp3',
	},
	{
		title: 'Home: My First Story',
		id: '8',
		link: '../assets/music/jpop/myfirststory.mp3',
	},
	{
		title: 'Ray: Passcode',
		id: '9',
		link: '../assets/music/jpop/passcode.mp3',
	},
	{
		title: `I'm a Moth: LIA LIA`,
		id: '10',
		link: '../assets/music/misc/moth.mp3',
	},
	{
		title: `Think About Things: Daði Freyr`,
		id: '11',
		link: '../assets/music/misc/think.mp3',
	},
	{
		title: `This Too Shall Pass: Danny Schmidt`,
		id: '12',
		link: '../assets/music/misc/danny.mp3',
	},
	{
		title: `Trying: Midwxst`,
		id: '13',
		link: '../assets/music/rap/midwxst.mp3',
	},
	{
		title: `Troop: Tobi Lou`,
		id: '14',
		link: '../assets/music/rap/troop.mp3',
	},
	{
		title: `2 AM: Swavay`,
		id: '15',
		link: '../assets/music/rap/2am.mp3',
	},
	{
		title: `Sweet Victory: Spongebob`,
		id: '16',
		link: '../assets/music/misc/victory.mp3',
	},
	{
		title: `Renalla`,
		id: '17',
		link: '../assets/games/Elden/renalla.mp3',
	},
	{
		title: `Godskin Apostles`,
		id: '18',
		link: '../assets/games/Elden/apostle.mp3',
	},
	{
		title: `Good Riddance`,
		id: '19',
		link: '../assets/games/Hades/riddance.mp3',
	},
	{
		title: `Orpheus' Lament`,
		id: '20',
		link: '../assets/games/Hades/orpheus.mp3',
	},
	{
		title: `Nay`,
		id: '21',
		link: '../assets/games/MHW/honour.mp3',
	},
	{
		title: `Tales`,
		id: '22',
		link: '../assets/games/MHW/tales.mp3',
	},
	{
		title: `Supermoon`,
		id: '23',
		link: '../assets/games/NMS/supermoon.mp3',
	},
	{
		title: `Red Parallax`,
		id: '24',
		link: '../assets/games/NMS/red.mp3',
	},
	{
		title: `Lift`,
		id: '25',
		link: '../assets/games/Warframe/lift.mp3',
	},
	{
		title: `This Is What You Are`,
		id: '26',
		link: '../assets/games/Warframe/thisis.mp3',
	},
];

const btns = document.querySelectorAll('.play-btn');
let audio = new Audio('');

btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		console.log(e.target.id);
		// const audio = new Audio(getLink(e.target.id));
		if (!audio.paused) {
			audio.pause();
		} else {
			audio.src = getLink(e.target.id);
			audio.play();
		}
	});
});

const getLink = function (id) {
	return music[id - 1].link;
};
