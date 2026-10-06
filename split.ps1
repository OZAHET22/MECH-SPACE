Add-Type -AssemblyName System.Drawing
$imgPath = "c:\Users\het22\Downloads\parth web sites\new image\FOOD-GRADE SS304 MESH new image.jpg"
$img = [System.Drawing.Image]::FromFile($imgPath)
$width = [int]($img.Width / 2)
$height = $img.Height

$rectLeft = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$bmpLeft = New-Object System.Drawing.Bitmap($width, $height)
$gfxLeft = [System.Drawing.Graphics]::FromImage($bmpLeft)
$gfxLeft.DrawImage($img, 0, 0, $rectLeft, [System.Drawing.GraphicsUnit]::Pixel)
$bmpLeft.Save("c:\Users\het22\Downloads\parth web sites\web\public\img\solutions\spiral-freezer\food-grade-ss304-mesh-split.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)

$rectRight = New-Object System.Drawing.Rectangle($width, 0, $width, $height)
$bmpRight = New-Object System.Drawing.Bitmap($width, $height)
$gfxRight = [System.Drawing.Graphics]::FromImage($bmpRight)
$gfxRight.DrawImage($img, 0, 0, $rectRight, [System.Drawing.GraphicsUnit]::Pixel)
$bmpRight.Save("c:\Users\het22\Downloads\parth web sites\web\public\img\solutions\spiral-freezer\link-belts-split.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)

$gfxLeft.Dispose()
$bmpLeft.Dispose()
$gfxRight.Dispose()
$bmpRight.Dispose()
$img.Dispose()
