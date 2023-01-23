class HomePage {
  spendkeyLogo = "img.logo";
  loggedInUser = "span.cld-loggedin-user"
  preReports = "mat-nested-tree-node.mat-nested-tree-node:nth-child(2)>div:first"
  postReports = "mat-nested-tree-node.mat-nested-tree-node:nth-child(3)>div:first"
  preReportListElements = ".mat-nested-tree-node:nth-child(2) > div:nth-child(2) > mat-tree-node"
  postReportListElements = ".mat-nested-tree-node:nth-child(3) > div:nth-child(2) > mat-tree-node"


  // sideBar = "ul[role=menu] > li > a"
  // openedMenuList = "li[class='nav-item has-treeview menu-is-opening menu-open'] > ul > li > a > p"

}
export const homePage = new HomePage();
