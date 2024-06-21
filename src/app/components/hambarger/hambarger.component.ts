import { Component } from '@angular/core';

@Component({
  selector: 'app-hambarger',
  templateUrl: './hambarger.component.html',
  styleUrls: ['./hambarger.component.css'],
})
export class HambargerComponent {
  menuData: any[] = [
    {
      label: 'Dashboard',
      url: '',
      linkParent: 'Dashboard',
    },
    {
      label: 'Settings',
      url: '',
      linkParent: 'Dashboard',
    },
    {
      label: 'Logout',
      url: '',
      linkParent: 'Dashboard',
    },
    {
      label: 'Profile',
      url: '',
      linkParent: 'Dashboard',
    },
    {
      label: 'Profile',
      url: '',
      linkParent: 'Dashboard',
    },
    {
      label: 'Profile',
      url: '',
      linkParent: 'Dashboard',
    },

    // {
    //   label: 'User',
    //   url: '',
    //   linkParent: 'Dashboard',
    //   isDropDown: true,
    //   children: [
    //     {
    //       label: 'Add User',
    //       url: '',
    //       linkParent: 'User',
    //     },
    //     {
    //       label: 'Update User',
    //       url: '',
    //       linkParent: 'User',
    //     }
    //   ]
    // }
  ]
  menuParent: string = 'Dashboard'



  constructor() { }

  ngOnInit(): void {
    console.log(this.menuData.length);

  }
}
