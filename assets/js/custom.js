// ========================================
// KEYGIN ERP SYNC PRO - FUNCIONALIDADES
// ========================================

document.addEventListener('DOMContentLoaded', function() {

    const currentVersion = '1.0.1'; // Cambiar al actualizar la versión
    
    document.querySelectorAll('h2').forEach(function(heading) {
        if (heading.textContent.includes('Versión ' + currentVersion)) {
            const badge = document.createElement('span');
            badge.className = 'version-badge version-stable';
            badge.textContent = 'Actual';
            heading.appendChild(badge);
        }
    });
    
    // 2. Copiar código al hacer clic
    document.querySelectorAll('pre').forEach(function(block) {
        block.addEventListener('click', function() {
            const code = this.textContent;
            navigator.clipboard.writeText(code).then(function() {
                // Feedback visual rápido
                const originalBg = block.style.backgroundColor;
                block.style.backgroundColor = '#2ea043';
                block.style.color = 'white';
                block.style.transition = 'all 0.2s';
                
                setTimeout(function() {
                    block.style.backgroundColor = originalBg;
                    block.style.color = '';
                }, 200);
            });
        });
        
        // Añadir cursor pointer para indicar que se puede copiar
        block.style.cursor = 'pointer';
        block.setAttribute('title', 'Haz clic para copiar');
    });
    
    // 3. Añadir clases a tablas para mejor estilo
    document.querySelectorAll('.main-content table').forEach(function(table) {
        table.classList.add('keygin-table');
    });
    
    // 4. Detectar notas en troubleshooting
    document.querySelectorAll('.main-content blockquote').forEach(function(blockquote) {
        const text = blockquote.textContent.toLowerCase();
        if (text.includes('importante') || text.includes('⚠️')) {
            blockquote.classList.add('keygin-note', 'warning');
        } else if (text.includes('error') || text.includes('🚫')) {
            blockquote.classList.add('keygin-note', 'danger');
        } else if (text.includes('✅') || text.includes('éxito')) {
            blockquote.classList.add('keygin-note', 'success');
        } else {
            blockquote.classList.add('keygin-note');
        }
    });
});