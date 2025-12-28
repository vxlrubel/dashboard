const { createApp } = Vue;

const Header = createApp({
   data() {
      return {
         menu_item_src: "assets/js/menu-item.json",
         menu: [],
         icons: {
            dashboard: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" height="24px" width="24px">
                    <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/>
                </svg>
            `,
            angle_right: `
               <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor">
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
               </svg>`,
         },
      };
   },
   mounted() {
      this.load_menu_items();
   },
   methods: {
      async load_menu_items() {
         try {
            const response = await fetch(this.menu_item_src);

            if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            this.menu = data;
         } catch (error) {
            console.error("Error loading menu:", error);
         }
      },
   },
});

Header.mount("#header");
