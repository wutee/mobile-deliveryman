import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AccountResourceService } from './api/accountResource.service';
import { CustomerResourceService } from './api/customerResource.service';
import { DeliveryPersonnelResourceService } from './api/deliveryPersonnelResource.service';
import { FoodOrderResourceService } from './api/foodOrderResource.service';
import { FoodResourceService } from './api/foodResource.service';
import { IngredientOrderResourceService } from './api/ingredientOrderResource.service';
import { IngredientResourceService } from './api/ingredientResource.service';
import { LanguageResourceService } from './api/languageResource.service';
import { MenuResourceService } from './api/menuResource.service';
import { PaymentMethodResourceService } from './api/paymentMethodResource.service';
import { PaymentResourceService } from './api/paymentResource.service';
import { RestaurantResourceService } from './api/restaurantResource.service';
import { RestaurantWorkerResourceService } from './api/restaurantWorkerResource.service';
import { TranslationResourceService } from './api/translationResource.service';
import { UserResourceService } from './api/userResource.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AccountResourceService,
    CustomerResourceService,
    DeliveryPersonnelResourceService,
    FoodOrderResourceService,
    FoodResourceService,
    IngredientOrderResourceService,
    IngredientResourceService,
    LanguageResourceService,
    MenuResourceService,
    PaymentMethodResourceService,
    PaymentResourceService,
    RestaurantResourceService,
    RestaurantWorkerResourceService,
    TranslationResourceService,
    UserResourceService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
