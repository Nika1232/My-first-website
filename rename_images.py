import os

# Specify the directory containing the photos
directory = 'C://Users//qwer//Desktop//Level 7 - Copy - Copy//rosen garten saga//arthur'  # Use double backslashes for Windows paths

# Get a list of all files in the directory
files = os.listdir(directory)

# Loop through each file in the directory
for file in files:
    # Check if the file is a jpg photo and starts with 'photo'
    if file.startswith('photo') and file.endswith('.jpg'):
        # Extract the number from the filename
        number = file.replace('photo', '').replace('.jpg', '')
        # Form the new filename
        new_name = f'image{number}.jpg'
        # Construct the full file paths
        old_file = os.path.join(directory, file)
        new_file = os.path.join(directory, new_name)
        # Rename the file
        os.rename(old_file, new_file)

print("Renaming complete!")
