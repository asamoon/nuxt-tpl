/*
* @Author: asamoon
* @Date:   2017-05-25 17:22:47
* @Last Modified by:   asamoon
* @Last Modified time: 2017-06-05 01:07:53
*/

async function upload (formData) {
  const photos = formData.getAll('photos')
  const promises = await photos.map((x) => getImage(x)
    .then(img => ({
      id: img,
      originalName: x.name,
      fileName: x.name,
      url: img
    })))

  console.log('upload', promises)
  return Promise.all(promises)
}

async function getImage (file) {
  return new Promise((resolve, reject) => {
    const fReader = new FileReader()
    const img = document.createElement('img')

    console.log('getImage')

    fReader.onload = () => {
      img.src = fReader.result
      resolve(getBase64Image(img))
    }

    fReader.readAsDataURL(file)
  })
}

function getBase64Image (img) {
  console.log('getBase64Image', img)
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height

  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)

  const dataURL = canvas.toDataURL('image/png')
  console.log('dataURL', img)
  return dataURL
}

export { upload }
