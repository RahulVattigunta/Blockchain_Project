
// Fetch blockchain data
async function fetchBlocks() {
    const response = await fetch('http://localhost:3001/blocks');
    const data = await response.json();
    document.getElementById('blockchain').textContent = JSON.stringify(data, null, 2);
}
