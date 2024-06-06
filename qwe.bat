@echo off
setlocal enabledelayedexpansion
set n=1
for %%i in (Untitled*.png) do (
    ren "%%i" "image!n!.jpg"
    set /a n+=1
)
