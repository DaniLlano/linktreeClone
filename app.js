const shareBtns = document.querySelector('.tile-share-button')

async function copyText(e) {
    e.preventDefault()

    const link = this.getAttribute('link')
    try {
        await navigator.clipboard.writeText(link)
        alert('Copied the text: ' + link)
        
    } catch (error) {
        console.log(error)
    }
}

shareBtns.forEach(shareBtn => shareBtn.addEventListener('click', copyText))