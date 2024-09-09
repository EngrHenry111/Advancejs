class dateOfBirth{
    constructor( fullName, year, month, day, TotalAge){
        this.fullName = fullName
        this.year = year;
        this.month = month;
        this.day = day;
        this.TotalAge = TotalAge;
    }
    vieDateOfBirth(){
        console.log('Full Name:', this.fullName);
        console.log('Year:', this.year );
        console.log('Month:', this.month );
        console.log('Day:', this.day);
        console.log('Total Age:', this.TotalAge ); 

}

}

const CurrentAges = new dateOfBirth( 'Henry M. Akpan', '2024', 'August', 'Friday', '15' )
const NextYearOfAge = new dateOfBirth('Henry M. Akpan','2025', 'August', 'Monday', '16')
const UpperYearOfAge = new dateOfBirth('Henry M. Akpan','2026', 'August', 'Thusday', '17')
const Year2027OfAge = new dateOfBirth('Henry M. Akpan', '2027', 'August', 'Wednesday', '18')

CurrentAges.vieDateOfBirth()
NextYearOfAge.vieDateOfBirth()
UpperYearOfAge.vieDateOfBirth()





