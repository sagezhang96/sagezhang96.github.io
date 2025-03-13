document.addEventListener('DOMContentLoaded', function() {
    // 汉堡菜单切换
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }

    // 移动端子菜单切换
    const hasChildren = document.querySelectorAll('.has-children > a');
    
    hasChildren.forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const submenu = this.nextElementSibling;
                if (submenu) {
                    submenu.style.display = 
                        submenu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });
});
