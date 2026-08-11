import sharp from 'sharp'

try {
  await sharp('public/r3tech-logo.webp').png().toFile('assets/logo-mark.png')
  console.log('done')
} catch (error) {
  console.error('ERR', error)
  process.exitCode = 1
}
