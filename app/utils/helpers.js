export function shareToTwitter(url) {
  const text = encodeURI('Check this out!')
  const link = encodeURI(url)
  return `https://twitter.com/intent/tweet?url=${link}&text=${text}&original_referer=`
}

export function shareToFacebook(url) {
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`
}
