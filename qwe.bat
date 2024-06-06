@echo off
setlocal enabledelayedexpansion

cd /d C:\Users\qwer\Desktop\Level 7\rosen garten saga\arthur

rem Set the starting count value
set count=1

rem Loop through all files with the pattern "image*.jpg"
for %%i in (image*.jpg) do (
    rem Check if the current file matches the expected naming pattern (image<count>.jpg)
    rem If it does, rename it to the expected name, otherwise, skip renaming
    if "%%~ni"=="image!count!" (
        rem Rename the file
        ren "%%i" "image!count!.jpg"
        rem Increment the count
        set /a count+=1
    )
    rem If the current file doesn't match the expected naming pattern, do nothing
)
