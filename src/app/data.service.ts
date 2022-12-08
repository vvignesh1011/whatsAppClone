import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    return{
      message:[
        {
        id: 1,
        name:"vignesh",
        mobileNo:7708783714,
        profile:"images/vignesh.jpg",
        msg:[
            {
                content:"hai",
                time:new Date("July 21, 2022 01:15:00"),
                owner:true
            },
            {
                content:"hai",
                time:new Date("July 22, 2022 01:15:10"),
                owner:false
            },
            {
                content:"how are you?",
                time:new Date("July 22, 2022 01:16:00"),
                owner:false
            },
            {
                content:"yeah iam fine",
                time:new Date("July 22, 2022 01:16:10"),
                owner:true
            },
            {
                content:"what about you?",
                time:new Date("July 22, 2022 01:16:20"),
                owner:true
            },
            {
                content:"Iam also good",
                time:new Date("July 22, 2022 01:17:00"),
                owner:false
            },
            {
                content:"hai",
                time:new Date("July 21, 2022 01:15:00"),
                owner:true
            },
            {
                content:"hai",
                time:new Date("July 22, 2022 01:15:10"),
                owner:false
            },
            {
                content:"how are you?",
                time:new Date("July 22, 2022 01:16:00"),
                owner:false
            },
            {
                content:"yeah iam fine",
                time:new Date("July 22, 2022 01:16:10"),
                owner:true
            },
            {
                content:"what about you?",
                time:new Date("July 22, 2022 01:16:20"),
                owner:true
            },
            {
                content:"Iam also good",
                time:new Date("July 22, 2022 01:17:00"),
                owner:false
            },
            {
                content:"hai",
                time:new Date("July 21, 2022 01:15:00"),
                owner:true
            },
            {
                content:"hai",
                time:new Date("July 22, 2022 01:15:10"),
                owner:false
            },
            {
                content:"how are you?",
                time:new Date("July 22, 2022 01:16:00"),
                owner:false
            },
            {
                content:"yeah iam fine",
                time:new Date("July 22, 2022 01:16:10"),
                owner:true
            },
            {
                content:"what about you?",
                time:new Date("July 22, 2022 01:16:20"),
                owner:true
            },
            {
                content:"Iam also good",
                time:new Date("July 22, 2022 01:17:00"),
                owner:false
            }
        
        ]
        },
    
    
        {   id:2,
            name:"sathya",
            mobileNo:7708783715,
            profile:"images/sathya.jpg",
            msg:[
                {
                    content:"hai",
                    time:new Date("July 20, 2022 01:15:00"),
                    owner:false
                },
                {
                    content:"how are you",
                    time:new Date("July 22, 2022 01:15:00"),
                    owner:true
                }
            
            ]
        },
    
    
        {   id:3,
            name:"",
            mobileNo:7708783744,
            profile:"images/blank.jpg",
            msg:[
                {
                    content:"hai",
                    time:new Date("July 1, 2022 01:15:00"),
                    owner:true
                },
                {
                    content:"hey",
                    time:new Date("July 22, 2022 01:15:00"),
                    owner:false
                }
            
            ]
        },
    
    
        {   id:4,
            name:"ajai",
            mobileNo:7708783777,
            profile:"images/ajai.jpg",
            msg:[
                {
                    content:"hai",
                    time:new Date("July 20, 2022 01:15:00"),
                    owner:true
                },
                {
                    content:"what are you doing",
                    time:new Date("July 22, 2022 01:15:00"),
                    owner:false
                }
            
            ]
        },
    
    
        {   id:5,
            name:"vignesh",
            mobileNo:7808783714,
            profile:"",
            msg:[
                {
                    content:"hai",
                    time:new Date("July 21, 2022 01:15:00"),
                    owner:false
                },
                {
                    content:"hello",
                    time:new Date("July 22, 2022 01:15:00"),
                    owner:true
                }
            
            ]
            },
        
        
            {   id:6,
                name:"sathya",
                mobileNo:7808783715,
                profile:"",
                msg:[
                    {
                        content:"hai",
                        time:new Date("July 20, 2022 01:15:00"),
                        owner:false
                    },
                    {
                        content:"how are you",
                        time:new Date("July 22, 2022 01:15:00"),
                        owner:false
                    }
                
                ]
            },
        
        
            {   id:7,
                name:"",
                mobileNo:7808783744,
                profile:"",
                msg:[
                    {
                        content:"hai",
                        time:new Date("July 1, 2022 01:15:00"),
                        owner:false
                    },
                    {
                        content:"hey",
                        time:new Date("July 22, 2022 01:15:00"),
                        owner:true
                    }
                
                ]
            },
        
        
            {   id:9,
                name:"ajai",
                mobileNo:7808783777,
                profile:"",
                msg:[
                    {
                        content:"hai",
                        time:new Date("July 20, 2022 01:15:00"),
                        owner:true
                    },
                    {
                        content:"what are you doing",
                        time:new Date("July 22, 2022 01:15:00"),
                        owner:true
                    }
                
                ]
        },
    
    
    ]
    }
  }

  
}
