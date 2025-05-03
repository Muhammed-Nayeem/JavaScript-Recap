/**
 * @title: Contact List by Group
 */

// List of Contact
const contacts = [
	{
		name: 'Harlan',
		phone: '1-633-915-8243',
		email: 'fames.ac.turpis@semperauctor.ca',
	},
	{
		name: 'MacKenzie',
		phone: '1-584-760-3374',
		email: 'montes.nascetur@semper.edu',
	},
	{
		name: 'Brenda',
		phone: '1-489-526-7803',
		email: 'Nunc.commodo@imperdietullamcorper.edu',
	},
	{
		name: 'Amir',
		phone: '1-268-433-8789',
		email: 'pede.nec@ipsumleoelementum.ca',
	},
	{
		name: 'Micah',
		phone: '1-252-353-3852',
		email: 'imperdiet.dictum.magna@nonjustoProin.org',
	},
	{
		name: 'Hoyt',
		phone: '1-547-586-9255',
		email: 'adipiscing@Duis.ca',
	},
	{
		name: 'Josephine',
		phone: '1-436-927-3389',
		email: 'augue.Sed.molestie@egestas.edu',
	},
	{
		name: 'Armand',
		phone: '1-714-354-5224',
		email: 'vel@aliquet.com',
	},
	{
		name: 'Dolan',
		phone: '1-465-652-4930',
		email: 'vitae.orci@miAliquamgravida.org',
	},
	{
		name: 'Ulric',
		phone: '1-943-292-8687',
		email: 'tortor@placeratorcilacus.edu',
	},
	{
		name: 'Shellie',
		phone: '1-407-265-7337',
		email: 'Phasellus.ornare@ac.com',
	},
	{
		name: 'Wylie',
		phone: '1-766-764-6693',
		email: 'senectus.et@semperegestasurna.edu',
	},
	{
		name: 'Jolene',
		phone: '1-291-909-7030',
		email: 'Suspendisse@loremeget.org',
	},
	{
		name: 'Caryn',
		phone: '1-527-929-7852',
		email: 'Duis.a.mi@nec.co.uk',
	},
	{
		name: 'Kaye',
		phone: '1-564-139-0536',
		email: 'urna.Nunc.quis@sapienCras.com',
	},
	{
		name: 'Raja',
		phone: '1-486-734-9089',
		email: 'malesuada.ut.sem@neque.net',
	},
	{
		name: 'Casey',
		phone: '1-741-397-0965',
		email: 'Duis@orciPhasellusdapibus.net',
	},
	{
		name: 'Kareem',
		phone: '1-204-970-1158',
		email: 'Proin@mattis.org',
	},
	{
		name: 'Gareth',
		phone: '1-801-430-8894',
		email: 'amet.nulla.Donec@eleifendegestas.co.uk',
	},
	{
		name: 'Armando',
		phone: '1-616-199-9820',
		email: 'massa@malesuadaut.org',
	},
	{
		name: 'Ella',
		phone: '1-757-484-9965',
		email: 'at@sed.net',
	},
	{
		name: 'Cade',
		phone: '1-852-302-5607',
		email: 'cursus.Integer@iderat.org',
	},
	{
		name: 'Kyle',
		phone: '1-320-980-7162',
		email: 'mauris.aliquam.eu@fringillaest.org',
	},
	{
		name: 'Genevieve',
		phone: '1-908-209-3082',
		email: 'sagittis.placerat.Cras@auctornuncnulla.com',
	},
	{
		name: 'Aimee',
		phone: '1-388-630-3819',
		email: 'et@congueturpisIn.co.uk',
	},
	{
		name: 'Tatiana',
		phone: '1-671-574-8768',
		email: 'et.magnis.dis@dignissim.com',
	},
	{
		name: 'Ruth',
		phone: '1-965-991-1759',
		email: 'nisi@necimperdiet.ca',
	},
	{
		name: 'Jason',
		phone: '1-469-608-7886',
		email: 'orci@metus.net',
	},
	{
		name: 'Wallace',
		phone: '1-470-718-9090',
		email: 'Integer@vitae.co.uk',
	},
	{
		name: 'Joy',
		phone: '1-394-709-6256',
		email: 'lectus.Nullam.suscipit@quistristique.net',
	},
	{
		name: 'September',
		phone: '1-467-642-3722',
		email: 'lacinia@quistristiqueac.edu',
	},
	{
		name: 'Sonia',
		phone: '1-513-708-6316',
		email: 'vehicula@ametloremsemper.com',
	},
	{
		name: 'Zeph',
		phone: '1-913-302-1864',
		email: 'magna.sed.dui@a.ca',
	},
	{
		name: 'Orla',
		phone: '1-665-776-1821',
		email: 'nec.diam.Duis@mattisIntegereu.ca',
	},
	{
		name: 'Mikayla',
		phone: '1-543-537-7002',
		email: 'non.arcu.Vivamus@nibhDonecest.net',
	},
	{
		name: 'Brian',
		phone: '1-724-912-9542',
		email: 'id.ante.dictum@malesuadamalesuadaInteger.org',
	},
	{
		name: 'Alfreda',
		phone: '1-595-416-6610',
		email: 'Quisque.ornare@aptent.ca',
	},
	{
		name: 'Simone',
		phone: '1-673-502-5967',
		email: 'eu.tellus@tempus.com',
	},
	{
		name: 'Medge',
		phone: '1-437-517-3071',
		email: 'magna@tempus.org',
	},
	{
		name: 'Haviva',
		phone: '1-776-397-1970',
		email: 'non.leo@molestietellus.ca',
	},
	{
		name: 'Galvin',
		phone: '1-432-378-8502',
		email: 'tincidunt.congue.turpis@dictum.com',
	},
	{
		name: 'Uriel',
		phone: '1-984-674-8280',
		email: 'libero@fringillapurus.net',
	},
	{
		name: 'Portia',
		phone: '1-540-438-1644',
		email: 'felis@Pellentesquehabitantmorbi.net',
	},
	{
		name: 'Xander',
		phone: '1-435-730-7285',
		email: 'tempor.lorem@lorem.org',
	},
	{
		name: 'Joelle',
		phone: '1-815-311-8284',
		email: 'et@magnaCrasconvallis.org',
	},
	{
		name: 'Imogene',
		phone: '1-599-131-3053',
		email: 'Mauris.ut.quam@liberoDonecconsectetuer.edu',
	},
	{
		name: 'Iliana',
		phone: '1-244-775-7896',
		email: 'turpis.non@congueIn.com',
	},
	{
		name: 'Fulton',
		phone: '1-565-912-3354',
		email: 'natoque.penatibus.et@erosnectellus.com',
	},
	{
		name: 'Mariko',
		phone: '1-471-204-4370',
		email: 'Quisque.varius@magnaCrasconvallis.com',
	},
	{
		name: 'Taylor',
		phone: '1-205-310-7922',
		email: 'luctus@euismodindolor.net',
	},
	{
		name: 'Salvador',
		phone: '1-682-353-3744',
		email: 'neque.sed@Donecat.edu',
	},
	{
		name: 'Megan',
		phone: '1-128-436-8661',
		email: 'ipsum.leo.elementum@milaciniamattis.com',
	},
	{
		name: 'Chanda',
		phone: '1-928-356-2835',
		email: 'sapien@felis.co.uk',
	},
	{
		name: 'Lyle',
		phone: '1-117-208-0446',
		email: 'eget.metus.In@felisadipiscingfringilla.co.uk',
	},
	{
		name: 'Aristotle',
		phone: '1-299-773-3685',
		email: 'ante@sociosquad.edu',
	},
	{
		name: 'Evangeline',
		phone: '1-128-570-5536',
		email: 'sem@mi.edu',
	},
	{
		name: 'Phillip',
		phone: '1-536-234-7703',
		email: 'elit.elit@magnisdisparturient.org',
	},
	{
		name: 'Rooney',
		phone: '1-286-633-2228',
		email: 'ante.dictum@acmattis.ca',
	},
	{
		name: 'Caldwell',
		phone: '1-447-363-1672',
		email: 'vel.est@lorem.ca',
	},
	{
		name: 'Savannah',
		phone: '1-823-356-5690',
		email: 'at.nisi@scelerisquesed.co.uk',
	},
	{
		name: 'Jermaine',
		phone: '1-757-928-0500',
		email: 'nonummy@urna.org',
	},
	{
		name: 'Anne',
		phone: '1-841-728-6660',
		email: 'enim@ornareegestasligula.edu',
	},
	{
		name: 'TaShya',
		phone: '1-601-849-7127',
		email: 'Phasellus@tincidunt.net',
	},
	{
		name: 'Aaron',
		phone: '1-110-570-4090',
		email: 'faucibus@Suspendissecommodo.net',
	},
	{
		name: 'Indigo',
		phone: '1-243-906-9189',
		email: 'dictum.sapien@vel.ca',
	},
	{
		name: 'Hannah',
		phone: '1-590-222-9734',
		email: 'Integer@pedePraesent.org',
	},
	{
		name: 'Matthew',
		phone: '1-359-199-0970',
		email: 'pharetra@gravidasagittisDuis.org',
	},
	{
		name: 'Mikayla',
		phone: '1-427-208-6214',
		email: 'tempus.mauris@dis.net',
	},
	{
		name: 'Brady',
		phone: '1-148-854-2490',
		email: 'Cras.dictum.ultricies@lectus.net',
	},
	{
		name: 'Porter',
		phone: '1-618-411-4718',
		email: 'quam.quis.diam@leoVivamusnibh.com',
	},
	{
		name: 'Blaine',
		phone: '1-894-659-7265',
		email: 'sed.turpis@risusodio.ca',
	},
	{
		name: 'Silas',
		phone: '1-982-234-4023',
		email: 'ipsum.Phasellus.vitae@Vivamusnon.edu',
	},
	{
		name: 'Lucian',
		phone: '1-999-885-6013',
		email: 'ut.quam@estvitae.ca',
	},
	{
		name: 'Rudyard',
		phone: '1-287-604-5790',
		email: 'amet.faucibus.ut@Maurisnondui.ca',
	},
	{
		name: 'Fredericka',
		phone: '1-154-989-8191',
		email: 'Maecenas@velest.ca',
	},
	{
		name: 'Knox',
		phone: '1-795-712-5278',
		email: 'magna.Cras.convallis@nibhQuisque.co.uk',
	},
	{
		name: 'Hayes',
		phone: '1-738-448-0618',
		email: 'mauris.eu@Aliquamgravida.ca',
	},
	{
		name: 'Kyle',
		phone: '1-282-943-3727',
		email: 'egestas@tincidunt.com',
	},
	{
		name: 'Ulysses',
		phone: '1-250-326-1835',
		email: 'aliquam.adipiscing.lacus@nec.edu',
	},
	{
		name: 'Giacomo',
		phone: '1-336-721-0391',
		email: 'est@elit.com',
	},
	{
		name: 'Samuel',
		phone: '1-339-585-9308',
		email: 'condimentum.eget@pedeet.co.uk',
	},
	{
		name: 'Kessie',
		phone: '1-635-533-6409',
		email: 'vel@Nuncacsem.net',
	},
	{
		name: 'Kasimir',
		phone: '1-603-647-1250',
		email: 'massa@massa.co.uk',
	},
	{
		name: 'Barbara',
		phone: '1-682-302-3492',
		email: 'euismod.urna@vulputatedui.org',
	},
	{
		name: 'Reed',
		phone: '1-312-667-6986',
		email: 'malesuada.Integer@massa.net',
	},
	{
		name: 'Teagan',
		phone: '1-556-621-2237',
		email: 'lorem.sit@sitametnulla.ca',
	},
	{
		name: 'Irene',
		phone: '1-374-981-3244',
		email: 'ipsum@ipsum.com',
	},
	{
		name: 'Wylie',
		phone: '1-859-112-3137',
		email: 'Nulla.tincidunt@Etiamvestibulummassa.org',
	},
	{
		name: 'Lars',
		phone: '1-870-525-2675',
		email: 'erat.Sed@elitafeugiat.ca',
	},
	{
		name: 'Odette',
		phone: '1-406-828-9431',
		email: 'nisi.sem@Nullamsuscipit.org',
	},
	{
		name: 'Helen',
		phone: '1-182-445-2733',
		email: 'sapien.Aenean@egetvariusultrices.co.uk',
	},
	{
		name: 'Alfreda',
		phone: '1-149-876-9333',
		email: 'amet@Nullamscelerisqueneque.edu',
	},
	{
		name: 'Rooney',
		phone: '1-961-422-1071',
		email: 'ligula@Crassed.co.uk',
	},
	{
		name: 'Cody',
		phone: '1-124-285-0708',
		email: 'ac.arcu.Nunc@in.edu',
	},
	{
		name: 'Hop',
		phone: '1-297-865-5512',
		email: 'magna@Aeneansedpede.ca',
	},
	{
		name: 'Mufutau',
		phone: '1-930-309-4352',
		email: 'eu@arcu.co.uk',
	},
	{
		name: 'Emerson',
		phone: '1-686-582-4671',
		email: 'diam.Duis.mi@utaliquam.co.uk',
	},
	{
		name: 'Hiroko',
		phone: '1-173-755-6142',
		email: 'Vivamus@Quisquefringilla.edu',
	},
	{
		name: 'Conan',
		phone: '1-901-471-2061',
		email: 'neque@erat.com',
	},
	{
		name: 'Cedric',
		phone: '1-935-690-0146',
		email: 'condimentum.Donec.at@enim.ca',
	},
];

contacts.sort((a, b) => {
	if (a.name > b.name) return 1;
	if (a.name < b.name) return -1;
	return 0;
});

const group = contacts.reduce((acc, cur) => {
	let groupName = cur.name.charAt(0).toUpperCase();
	if (acc[groupName]) {
		acc[groupName].push(cur);
	} else {
		acc[groupName] = [cur];
	}

	return acc;
}, {});

const displayList = (group) => {
	console.log('Displaying Contact Information');
	console.log('--------------------------------------');

	const keys = Object.keys(group);
	keys.forEach((key) => {
		console.log(`Group: ${key}`);
		console.table(group[key]);
	});
};

displayList(group);
