import { Component, Input, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  isHambargerOpen: boolean = false

  // menuParent: String = '';
  // @Input() menuData: any[] = [];
  // newMenuData: any[] = [];


  // // first menus
  // firstFiveMenus: any[] = [];
  // restMenus: any[] = [];
  // topNavService: TopNavServiceService;

  // toggleHambarger() {
  //   this.isHambargerOpen = !this.isHambargerOpen
  // }
  // closeHamburger() {
  //   this.isHambargerOpen = false
  // }

  // constructor(topNavService: TopNavServiceService, private cdr: ChangeDetectorRef, private router: Router) {
  //   this.topNavService = topNavService;
  // }

  // ngOnInit(): void {

  //   let topNavData = localStorage.getItem('topNavData');
  //   let topNavParent = localStorage.getItem('topNavParent');

  //   this.topNavService.navParentName.subscribe((data) => {

  //     if (data === 'quick-menu') {
  //       this.menuParent = '';
  //       this.firstFiveMenus = [];
  //       this.restMenus = [];
  //       localStorage.removeItem('topNavParent');
  //       localStorage.removeItem('topNavData');
  //     } else {
  //       if (data == '') {
  //         if (topNavData && topNavParent) {
  //           this.menuParent = topNavParent;
  //           this.newMenuData = JSON.parse(topNavData);
  //         }
  //       } else {
  //         this.menuParent = data;
  //       }
  //     }
  //     localStorage.setItem('topNavParent', this.menuParent.toString());

  //     this.newMenuData = [];
  //     this.menuData.forEach((element) => {
  //       if (element.linkParent == this.menuParent) {
  //         if (!this.newMenuData.includes(element)) {
  //           this.newMenuData.push(element);
  //         }
  //       }
  //     });
  //     localStorage.setItem('topNavData', JSON.stringify(this.newMenuData));


  //     this.menuMatchedAndSeparate(this.newMenuData);
  //     // Trigger change detection
  //     this.cdr.detectChanges();

  //     // Initialize the dropdown functionality
  //     this.initializeDropdowns();
  //   });
  // }

  // addNewData() {

  // }


  // menuMatchedAndSeparate(menu: any): void {
  //   let matchedMenuArray: any[] = [];
  //   this.firstFiveMenus = [];
  //   this.restMenus = [];


  //   menu.forEach((item: any) => {
  //     if (item.linkParent == this.menuParent) {
  //       matchedMenuArray.push(item);
  //     }
  //   });

  //   this.firstFiveMenus = matchedMenuArray.slice(0, 5);
  //   this.restMenus = matchedMenuArray.slice(5, matchedMenuArray.length);
  // }

  // ngAfterViewInit(): void {
  //   // Initialize the dropdown functionality
  //   this.initializeDropdowns();
  // }


  // initializeDropdowns(): void {
  //   let dropdown = document.getElementsByClassName("dropdown-btn");
  //   for (let i = 0; i < dropdown.length; i++) {
  //     dropdown[i].addEventListener("click", () => {
  //       // Add a class to the parent a tag
  //       let parent = dropdown[i].parentElement;
  //       let aTag = parent.querySelector("a");

  //       if (aTag.classList.contains("active")) {
  //         aTag.classList.remove("active");
  //       } else {
  //         aTag.classList.add("active");
  //       }

  //       let icon = dropdown[i].getElementsByTagName("i")[0];
  //       if (icon.classList.contains("bi-caret-down-fill")) {
  //         icon.classList.remove("bi-caret-down-fill");
  //         icon.classList.add("bi-caret-up-fill");
  //       } else {
  //         icon.classList.add("bi-caret-down-fill");
  //         icon.classList.remove("bi-caret-up-fill");
  //       }

  //       let ul = dropdown[i].nextElementSibling;
  //       if (ul!.classList.contains("submenu--list--show")) {
  //         ul!.classList.remove("submenu--list--show");
  //       } else {
  //         ul!.classList.add("submenu--list--show");
  //       }
  //     });

  //   }
  // }


}
