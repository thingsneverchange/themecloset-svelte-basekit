import type { UiStoreInterface } from '@themecloset/svelte-basekit'
import type { RequestHandlerOutput } from '@sveltejs/kit';
import type { Load } from "@sveltejs/kit"
import type { ErrorLoad, ExternalFetch } from "@sveltejs/kit"
import type { Page } from "@sveltejs/kit"
import { AxiosError } from 'axios';
import { paginationCalculator } from "pagination-calculator";
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}

  declare namespace Extender {
    interface RequestEvent<Params = Record<string, string>> {
    	request: Request;
    	url: URL;
    	params: Params;
    	locals: App.Locals;
      session: App.Session;
    	platform: Readonly<App.Platform>,
      fetch: ExternalFetch<T>
    }
    type RequestHandlerOutput = RequestHandlerOutput
    interface Cookies {
      jwt?: string | undefined,
      cookie_consent?: string | undefined,
      mh_id?: string | undefined,
      lang?: string
    }
    type Load = Load
    type ErrorLoad = ErrorLoad
    type Page = Page
    interface UploadOut {
        hash: string,
        url: string,
        rgb: { r: number, g: number, b: number }
    }
    declare namespace Axios {
      interface Error {
         error: Error | AxiosError<T>;
         type: 'axios-error' | 'stock-error';
      }
    }
    type Pagination = paginationCalculator<T>
  }

  declare namespace Stores {
    type ThemeclosetUiStore = UiStoreInterface
  }

}
