//충돌을 감지하는 함수
//if문의 조건에 (a&b)라는 조건이 들어 갈때 a 위치에 간단하고 true가 잘나오지 않는 조건을 최대한 넣도록 구현

function isGAMEOVER() {
   
    if ((-4 < sphere.position.x + 300 & sphere.position.x + 300 < 4 & -15 < sphere.position.z & sphere.position.z < 25)) {
        return true;
    } if ((sphere.position.z + 15) * (sphere.position.z + 15) + (sphere.position.x + 300) * (sphere.position.x + 300) < 16) {
        return true;
    }
  
  
    if (-4 < sphere.position.x + 120 & sphere.position.x + 120 < 0 & -4 < sphere.position.z - stumbling_block2.position.z & sphere.position.z - stumbling_block2.position.z < 4) {
        return true;
    }
    if ((sphere.position.x + 120) * (sphere.position.x + 120) + (sphere.position.z - stumbling_block2.position.z + 5) * (sphere.position.z - stumbling_block2.position.z + 5) < 16) {
        return true;
    }
    if ((sphere.position.x + 120) * (sphere.position.x + 120) + (sphere.position.z - stumbling_block2.position.z - 5) * (sphere.position.z - stumbling_block2.position.z - 5) < 16) {
        return true;
    }
    if (-120 < sphere.position.x & sphere.position.x < -80 & -9 < sphere.position.z - stumbling_block2.position.z & sphere.position.z - stumbling_block2.position.z < 0) {
        return true;
    }
    if (-120 < sphere.position.x & sphere.position.x < -80 & 0 < sphere.position.z - stumbling_block2.position.z & sphere.position.z - stumbling_block2.position.z < 9) {
        return true;
    }
    if ((sphere.position.x + 80) * (sphere.position.x + 80) + (sphere.position.z - stumbling_block2.position.z + 5) * (sphere.position.z - stumbling_block2.position.z + 5) < 16) {
        return true;
    }
    if ((sphere.position.x + 80) * (sphere.position.x + 80) + (sphere.position.z - stumbling_block2.position.z - 5) * (sphere.position.z - stumbling_block2.position.z - 5) < 16) {
        return true;
    }
    
    
    if (-4 < sphere.position.x + 20 & sphere.position.x + 20 < 0 & -4 < sphere.position.z - stumbling_block3.position.z & sphere.position.z - stumbling_block3.position.z < 4) {
        return true;
    }
    if ((sphere.position.x + 20) * (sphere.position.x + 20) + (sphere.position.z - stumbling_block3.position.z + 5) * (sphere.position.z - stumbling_block3.position.z + 5) < 16) {
        return true;
    }
    if ((sphere.position.x + 20) * (sphere.position.x + 20) + (sphere.position.z - stumbling_block3.position.z - 5) * (sphere.position.z - stumbling_block3.position.z - 5) < 16) {
        return true;
    }
    if (-20 < sphere.position.x & sphere.position.x < 20 & -9 < sphere.position.z - stumbling_block3.position.z & sphere.position.z - stumbling_block3.position.z < 0) {
        return true;
    }
    if (-20 < sphere.position.x & sphere.position.x < 20 & 0 < sphere.position.z - stumbling_block3.position.z & sphere.position.z - stumbling_block3.position.z < 9) {
        return true;
    }
    if ((sphere.position.x - 20) * (sphere.position.x - 20) + (sphere.position.z - stumbling_block3.position.z + 5) * (sphere.position.z - stumbling_block3.position.z + 5) < 16) {
        return true;
    }
    if ((sphere.position.x - 20) * (sphere.position.x - 20) + (sphere.position.z - stumbling_block3.position.z - 5) * (sphere.position.z - stumbling_block3.position.z - 5) < 16) {
        return true;
    }
    
    
    if (-25 < sphere.position.z & sphere.position.z < -15 & (sphere.position.x - 200) * (sphere.position.x - 200) + (14 - stumbling_block4.position.y) * (14 - stumbling_block4.position.y) < 16) {
        return true;
    }
    if (-25 < sphere.position.z & sphere.position.z < -15 & stumbling_block4 < 18) {
        return true;
    }
    if ((sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.y - stumbling_block4.position.y + 10) * (sphere.position.y - stumbling_block4.position.y + 10) + (sphere.position.z - stumbling_block4.position.z + 5) * (sphere.position.z - stumbling_block4.position.z + 5) < 16) {
        return true;
    }
    if ((sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.y - stumbling_block4.position.y + 10) * (sphere.position.y - stumbling_block4.position.y + 10) + (sphere.position.z - stumbling_block4.position.z - 5) * (sphere.position.z - stumbling_block4.position.z - 5) < 16) {
        return true;
    }
    if (stumbling_block4.position.y < 14 & (sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.z - stumbling_block4.position.z + 5) * (sphere.position.z - stumbling_block4.position.z + 5) < 16) {
        return true;
    }
    if (stumbling_block4.position.y < 14 & (sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.z - stumbling_block4.position.z - 5) * (sphere.position.z - stumbling_block4.position.z - 5) < 16) {
        return true;
    }
   
    if (-15 < sphere.position.z & sphere.position.z < -5 & (sphere.position.x - 200) * (sphere.position.x - 200) + (14 - stumbling_block5.position.y) * (14 - stumbling_block5.position.y) < 16) {
        return true;
    }
    if (-15 < sphere.position.z & sphere.position.z < -5 & stumbling_block5 < 18) {
        return true;
    }
    if ((sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.y - stumbling_block5.position.y + 10) * (sphere.position.y - stumbling_block5.position.y + 10) + (sphere.position.z - stumbling_block5.position.z + 5) * (sphere.position.z - stumbling_block5.position.z + 5) < 16) {
        return true;
    }
    if ((sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.y - stumbling_block5.position.y + 10) * (sphere.position.y - stumbling_block5.position.y + 10) + (sphere.position.z - stumbling_block5.position.z - 5) * (sphere.position.z - stumbling_block5.position.z - 5) < 16) {
        return true;
    }
    if (stumbling_block5.position.y < 14 & (sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.z - stumbling_block5.position.z + 5) * (sphere.position.z - stumbling_block5.position.z + 5) < 16) {
        return true;
    }
    if (stumbling_block5.position.y < 14 & (sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.z - stumbling_block5.position.z - 5) * (sphere.position.z - stumbling_block5.position.z - 5) < 16) {
        return true;
    }
   
    if (-5 < sphere.position.z & sphere.position.z < 5 & (sphere.position.x - 200) * (sphere.position.x - 200) + (14 - stumbling_block6.position.y) * (14 - stumbling_block6.position.y) < 16) {
        return true;
    }
    if (-5 < sphere.position.z & sphere.position.z < 5 & stumbling_block6 < 18) {
        return true;
    }
    if ((sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.y - stumbling_block6.position.y + 10) * (sphere.position.y - stumbling_block6.position.y + 10) + (sphere.position.z - stumbling_block6.position.z + 5) * (sphere.position.z - stumbling_block6.position.z + 5) < 16) {
        return true;
    }
    if ((sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.y - stumbling_block6.position.y + 10) * (sphere.position.y - stumbling_block6.position.y + 10) + (sphere.position.z - stumbling_block6.position.z - 5) * (sphere.position.z - stumbling_block6.position.z - 5) < 16) {
        return true;
    }
    if (stumbling_block6.position.y < 14 & (sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.z - stumbling_block6.position.z + 5) * (sphere.position.z - stumbling_block6.position.z + 5) < 16) {
        return true;
    }
    if (stumbling_block6.position.y < 14 & (sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.z - stumbling_block6.position.z - 5) * (sphere.position.z - stumbling_block6.position.z - 5) < 16) {
        return true;
    }
    if (5 < sphere.position.z & sphere.position.z < 15 & (sphere.position.x - 200) * (sphere.position.x - 200) + (14 - stumbling_block7.position.y) * (14 - stumbling_block7.position.y) < 16) {
        return true;
    }
    if (5 < sphere.position.z & sphere.position.z < 15 & stumbling_block7 < 18) {
        return true;
    }
    if ((sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.y - stumbling_block7.position.y + 10) * (sphere.position.y - stumbling_block7.position.y + 10) + (sphere.position.z - stumbling_block7.position.z + 5) * (sphere.position.z - stumbling_block7.position.z + 5) < 16) {
        return true;
    }
    if ((sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.y - stumbling_block7.position.y + 10) * (sphere.position.y - stumbling_block7.position.y + 10) + (sphere.position.z - stumbling_block7.position.z - 5) * (sphere.position.z - stumbling_block7.position.z - 5) < 16) {
        return true;
    }
    if (stumbling_block7.position.y < 14 & (sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.z - stumbling_block7.position.z + 5) * (sphere.position.z - stumbling_block7.position.z + 5) < 16) {
        return true;
    }
    if (stumbling_block7.position.y < 14 & (sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.z - stumbling_block7.position.z - 5) * (sphere.position.z - stumbling_block7.position.z - 5) < 16) {
        return true;
    }
    
    if (15 < sphere.position.z & sphere.position.z < 25 & (sphere.position.x - 200) * (sphere.position.x - 200) + (14 - stumbling_block8.position.y) * (14 - stumbling_block8.position.y) < 16) {
        return true;
    }
    if (15 < sphere.position.z & sphere.position.z < 25 & stumbling_block8 < 18) {
        return true;
    }
    if ((sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.y - stumbling_block8.position.y + 10) * (sphere.position.y - stumbling_block8.position.y + 10) + (sphere.position.z - stumbling_block8.position.z + 5) * (sphere.position.z - stumbling_block8.position.z + 5) < 16) {
        return true;
    }
    if ((sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.y - stumbling_block8.position.y + 10) * (sphere.position.y - stumbling_block8.position.y + 10) + (sphere.position.z - stumbling_block8.position.z - 5) * (sphere.position.z - stumbling_block8.position.z - 5) < 16) {
        return true;
    }
    if (stumbling_block8.position.y < 14 & (sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.z - stumbling_block8.position.z + 5) * (sphere.position.z - stumbling_block8.position.z + 5) < 16) {
        return true;
    }
    if (stumbling_block8.position.y < 14 & (sphere.position.x - 200) * (sphere.position.x - 200) + (sphere.position.z - stumbling_block8.position.z - 5) * (sphere.position.z - stumbling_block8.position.z - 5) < 16) {
        return true;
    }


    if ((sphere.position.x - stumbling_block9.position.x) * (sphere.position.x - stumbling_block9.position.x) + (sphere.position.y - stumbling_block9.position.y) * (sphere.position.y - stumbling_block9.position.y) + (sphere.position.z - stumbling_block9.position.z) * (sphere.position.z - stumbling_block9.position.z) < 81) {
        return true;
    }
    if ((sphere.position.x - stumbling_block10.position.x) * (sphere.position.x - stumbling_block10.position.x) + (sphere.position.y - stumbling_block10.position.y) * (sphere.position.y - stumbling_block10.position.y) + (sphere.position.z - stumbling_block10.position.z) * (sphere.position.z - stumbling_block10.position.z) < 81) {
        return true;
    }
    if ((sphere.position.x - stumbling_block11.position.x) * (sphere.position.x - stumbling_block11.position.x) + (sphere.position.y - stumbling_block11.position.y) * (sphere.position.y - stumbling_block11.position.y) + (sphere.position.z - stumbling_block11.position.z) * (sphere.position.z - stumbling_block11.position.z) < 81) {
        return true;
    }
    if ((sphere.position.x - stumbling_block12.position.x) * (sphere.position.x - stumbling_block12.position.x) + (sphere.position.y - stumbling_block12.position.y) * (sphere.position.y - stumbling_block12.position.y) + (sphere.position.z - stumbling_block12.position.z) * (sphere.position.z - stumbling_block12.position.z) < 81) {
        return true;
    }
    if ((sphere.position.x - stumbling_block13.position.x) * (sphere.position.x - stumbling_block13.position.x) + (sphere.position.y - stumbling_block13.position.y) * (sphere.position.y - stumbling_block13.position.y) + (sphere.position.z - stumbling_block13.position.z) * (sphere.position.z - stumbling_block13.position.z) < 81) {
        return true;
    }
}