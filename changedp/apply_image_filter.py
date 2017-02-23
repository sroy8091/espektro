#!/usr/bin/python

import sys
import PIL.Image as Image
#import PIL 
#form PIL import Image




def ApplyFilter(bg_image , fg_image):


	filtered_name =  bg_image.split('.')[0]+ fg_image.split('.')[0]+ ".png"
	print (filtered_name)
	bg =  Image.open(bg_image)

	fg = Image.open(fg_image + ".png")

	bg = bg.convert('RGBA')
	fg = fg.convert('RGBA')

	bg =  bg.resize((1000,1000), Image.ANTIALIAS)

	Image.alpha_composite(bg, fg).save(filtered_name)

if __name__=='__main__':
	bg_name = sys.argv[1]
	fg_name = sys.argv[2]
	ApplyFilter(bg_name , fg_name)
