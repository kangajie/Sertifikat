document.addEventListener('DOMContentLoaded', function () {
    // Disable right-click
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
    if (document.body) {
        document.body.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
    }

    // Prevent right mouse button actions
    ['mousedown', 'mouseup'].forEach(function(eventType) {
        document.addEventListener(eventType, function (e) {
            if (e.button === 2) {
                e.preventDefault();
            }
        });
        window.addEventListener(eventType, function (e) {
            if (e.button === 2) {
                e.preventDefault();
            }
        });
        if (document.body) {
            document.body.addEventListener(eventType, function (e) {
                if (e.button === 2) {
                    e.preventDefault();
                }
            });
        }
    });

    // Block certain keyboard shortcuts
    document.addEventListener('keydown', function (e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I/J/C
        if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U, Ctrl+S
        if (e.ctrlKey && ['U', 'S'].includes(e.key.toUpperCase())) {
            e.preventDefault();
            return false;
        }
    });
});
