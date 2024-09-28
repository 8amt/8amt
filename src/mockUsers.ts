export interface Friend {
    id: number;
    username: string;
    name: string;
    image: string;
    friend:boolean
    pin:boolean
  }
  
  export const mockUsers: Friend[] = [
    { id: 1, username: "jelil", name: "Abdljelil", image: "./images/jelil.png" ,friend:true,pin:true },
    { id: 2, username: "vall", name: "Med Vall", image: "./images/vall.png" ,friend:true,pin:true },
    { id: 3, username: "ebnou", name: "Wel Ebnou", image: "./images/iselmo.png" ,friend:true,pin:true },
    { id: 4, username: "iyehah", name: "Iyehah", image: "./images/iyehah.png" ,friend:true,pin:true },
    { id: 5, username: 'mariem', name: 'Mariem', image: '/images/mariem.png' ,friend:false,pin:false},
    { id: 6, username: 'khadijetou', name: 'Khadijetou', image: '/images/khadijetou.png' ,friend:true,pin:false},
    // Add more users as needed
  ];
  
  