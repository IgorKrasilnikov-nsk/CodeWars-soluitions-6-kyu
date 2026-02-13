/*
You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking! you want to take a picture on your phone, 
but... your memory is full again! ok, time to sort through your shuffled photos and make some space...

Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, 
you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

You will always get at least a photo and all pics will be in the format YYYY.imgN

Examples:

["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"] 
// Should return ["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]

["2016.img1"]
// Should return ["2016.img1","2016.img2"]
*/

function sortPhotos(pics) {
    const sorted = pics.sort((a, b) => {
        const [yearA, imgA] = a.split('.');
        const [yearB, imgB] = b.split('.');
        const numA = parseInt(imgA.slice(3));
        const numB = parseInt(imgB.slice(3));
        
        if (yearA !== yearB) {
            return parseInt(yearB) - parseInt(yearA);
        }
        return numB - numA;
    });
    
    const top5 = sorted.slice(0, 5);
    
    const newest = top5[0];
    const [year, img] = newest.split('.');
    const num = parseInt(img.slice(3));
    
    const nextPhoto = `${year}.img${num + 1}`;
    
    const result = [...top5, nextPhoto];
    
    return result.sort((a, b) => {
        const [yearA, imgA] = a.split('.');
        const [yearB, imgB] = b.split('.');
        const numA = parseInt(imgA.slice(3));
        const numB = parseInt(imgB.slice(3));
        
        if (yearA !== yearB) {
            return parseInt(yearA) - parseInt(yearB);
        }
        return numA - numB;
    });
}

console.log(sortPhotos(["2016.img4","2016.img5","2016.img1","2016.img3","2016.img2"])); //["2016.img1","2016.img2","2016.img3","2016.img4","2016.img5","2016.img6"]
console.log(sortPhotos(["2012.img2","2016.img1","2016.img3","2016.img4","2016.img5"])); //["2012.img2","2016.img1","2016.img3","2016.img4","2016.img5","2016.img6"]
console.log(sortPhotos(["2016.img1","2013.img3","2016.img2","2015.img3","2012.img7","2016.img4","2013.img5"])); //["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
console.log(sortPhotos(["2016.img7","2016.img2","2016.img3","2015.img3","2012.img8","2016.img4","2016.img5"])); //["2016.img2","2016.img3","2016.img4","2016.img5","2016.img7","2016.img8"]
