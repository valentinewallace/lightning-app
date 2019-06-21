package com.lightningapp.generated;

import java.util.Arrays;
import java.util.List;
import org.unimodules.core.interfaces.Package;

public class BasePackageList {
  public List<Package> getPackageList() {
    return Arrays.<Package>asList(
        new expo.modules.barcodescanner.BarCodeScannerPackage(),
        new expo.modules.constants.ConstantsPackage(),
        new expo.modules.filesystem.FileSystemPackage(),
        new expo.modules.font.FontLoaderPackage(),
        new expo.modules.keepawake.KeepAwakePackage(),
        new expo.modules.localauthentication.LocalAuthenticationPackage(),
        new expo.modules.permissions.PermissionsPackage(),
        new expo.modules.random.RandomPackage(),
        new expo.modules.securestore.SecureStorePackage()
    );
  }
}
