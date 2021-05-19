import os
from time import sleep
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

options = webdriver.ChromeOptions()
options.add_argument("user-data-dir={}\driver_data".format(os.getcwd()))

driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)

driver.get("https://linkedin.com")
# delete this after every month

while "1" != input("press 1 when signed in: "):
    pass

el = driver.find_element_by_xpath("//a[@data-test-global-nav-link='mynetwork']")
el.click()
print("Clicked connection requests tab!!")
sleep(1)
accept_blocks = driver.find_elements_by_css_selector('.mn-invitation-list li[id*=ember] button span')
for block in accept_blocks:
    if(block.text == "Accept"):
        block.click()
        print("Accpted connection request!!")
    sleep(1)

driver.close()