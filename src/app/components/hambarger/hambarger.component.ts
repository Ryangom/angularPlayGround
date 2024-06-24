import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hambarger',
  templateUrl: './hambarger.component.html',
  styleUrls: ['./hambarger.component.css'],
})




export class HambargerComponent {
  // menuData: any[] = [
  //   {
  //     label: 'Dashboard',
  //     url: '/test',
  //     linkParent: 'Dashboard',
  //   },
  //   {
  //     label: 'About US',
  //     url: '/about',
  //     linkParent: 'Dashboard',
  //   },
  //   {
  //     label: 'Service',
  //     url: '/service',
  //     linkParent: 'Dashboard',
  //   },

  //   {
  //     label: 'User',
  //     url: '-',
  //     linkParent: 'Dashboard',
  //     isDropDown: true,
  //     dropDownLinks: [
  //       {
  //         label: 'Add User',
  //         url: 'ss',
  //         linkParent: 'User',
  //       },
  //       {
  //         label: 'Update User',
  //         url: '',
  //         linkParent: 'User',
  //       }
  //     ]
  //   },
  //   {
  //     label: 'Student',
  //     url: '/sd',
  //     linkParent: 'Dashboard',
  //     isDropDown: true,
  //     dropDownLinks: [
  //       {
  //         label: 'Add studen',
  //         url: 'ss',
  //         linkParent: 'User',
  //       },

  //     ]
  //   },
  //   {
  //     label: 'logout1',
  //     url: '/logout1',
  //     linkParent: 'Dashboard',
  //   },
  //   {
  //     label: 'logout2',
  //     url: '/logout2',
  //     linkParent: 'Dashboard',
  //   },
  //   {
  //     label: 'logout3',
  //     url: '',
  //     linkParent: 'Dashboard',
  //     isDropDown: true,
  //     dropDownLinks: [
  //       {
  //         label: 'dropdown1',
  //         url: '/about',
  //         linkParent: '',
  //       },
  //       {
  //         label: 'dropdown2',
  //         url: 'ss',
  //         linkParent: '',
  //       },
  //       {
  //         label: 'dropdown3',
  //         url: 'ss',
  //         linkParent: '',
  //       },
  //       {
  //         label: 'dropdown4',
  //         url: 'ss',
  //         linkParent: '',
  //       },


  //     ]
  //   },
  // ]
  // menuParent: string = 'Dashboard'
  isHambargerOpen: boolean = false

  @Input() menuParent: string = '';
  @Input() menuData: any[] = [];


  // first menus
  firstFiveMenus: any[] = [];
  restMenus: any[] = [];


  toggleHambarger() {
    this.isHambargerOpen = !this.isHambargerOpen
  }

  constructor() { }

  ngOnInit(): void {
    this.menuMatchedAndSeparate(this.menuData);
  }


  menuMatchedAndSeparate(menu: any): void {
    let matchedMenuArray: any[] = [];

    menu.forEach((item: any) => {
      if (item.linkParent == this.menuParent) {
        matchedMenuArray.push(item);
      }
    });

    this.firstFiveMenus = matchedMenuArray.slice(0, 5);
    this.restMenus = matchedMenuArray.slice(5, matchedMenuArray.length);
  }


  ngAfterViewInit(): void {
    let dropdown = document.getElementsByClassName("dropdown-btn");
    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", () => {
        let icon = dropdown[i].getElementsByTagName("i")[0];
        if (icon.classList.contains("bi-caret-down-fill")) {
          icon.classList.remove("bi-caret-down-fill");
          icon.classList.add("bi-caret-up-fill");
        } else {
          icon.classList.add("bi-caret-down-fill");
          icon.classList.remove("bi-caret-up-fill");
        }

        let ul = dropdown[i].nextElementSibling;
        // console.log(ul)
        if (ul!.classList.contains("submenu--list--show")) {
          ul!.classList.remove("submenu--list--show");
        } else {
          ul!.classList.add("submenu--list--show");
        }
      });
    }
  }
}
